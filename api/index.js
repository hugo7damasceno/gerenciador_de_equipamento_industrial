const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mqtt = require('mqtt')

// servidor
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
  console.log('----[LOG] Servidor rodando em http://localhost:3000.');
});

// banco de dados
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'minha_industria',
  port: 3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log("----[LOG] Conectado ao banco.");
});

async function GravaDadoEquip(id_equip, campo, valor) {
  try {
    await con.query(`INSERT INTO dados_equipamento(id_equipamento, ${campo}) VALUES(${id_equip}, ${valor})`, (error) => {
      if (error) console.log('Erro ao inserir mqtt recebido: ' + error)
    })
  } catch (error) {
    console.log('Erro ao inserir mqtt recebido: ' + error)
  }  
}

async function AddEquip(params) {
  try {
    const { id, name, description, id_usr_cad, stop, reverse, acceleration } = JSON.parse(params)

    await con.query(`INSERT INTO equipamento(id, nome, descricao, id_usr_cad, parado, invertido, aceleracao)
      VALUES(?, ?, ?, ?, ?, ?, ?)`,  [id, name, description, id_usr_cad, stop, reverse, acceleration], (error) => {
      if (error) console.log('Erro ao inserir mqtt recebido: ' + error)
    })
  } catch (error) {
    console.log('Erro ao inserir mqtt recebido: ' + error)
  }  
}

// mqtt
const client = mqtt.connect('ws://broker.mqttdashboard.com:8000/mqtt')

client.on('connect', () => {
  client.subscribe('minha_industria/equipamento/add')

  con.query('SELECT * FROM equipamento', (error, result) => {
    if (error) throw error

    result.forEach(equip => {
      client.subscribe(`minha_industria/equipamento/${equip.id}`)
      client.subscribe(`minha_industria/equipamento/${equip.id}/velocity`)
      client.subscribe(`minha_industria/equipamento/${equip.id}/acceleration`)
      client.subscribe(`minha_industria/equipamento/${equip.id}/humidity`)
      client.subscribe(`minha_industria/equipamento/${equip.id}/temperature`)
      client.subscribe(`minha_industria/equipamento/${equip.id}/config`)
    });

    console.log("----[LOG] Subscribes mqtt estabelecidos.")
  })
})

client.on('message', (topic, message) => {
  if (topic === 'minha_industria/equipamento/add') {
    AddEquip(message)
  }
  else if (topic.includes('minha_industria/equipamento/')) {
    const id_equip = topic.replace('minha_industria/equipamento/', '').split('/')[0]
    const campo = topic.replace('minha_industria/equipamento/', '').split('/')[1]

    if (campo === 'velocity') {
      GravaDadoEquip(id_equip, 'velocidade', message)
    } else if (campo === 'acceleration') {
      GravaDadoEquip(id_equip, 'aceleracao', message)
    } else if (campo === 'humidity') {
      GravaDadoEquip(id_equip, 'umidade', message)
    } else if (campo === 'temperature') {
      GravaDadoEquip(id_equip, 'temperatura', message)
    }
  }

  console.log(`${topic} => ${message}`)
})

// endpoints
app.get('/equipamento/todos', async function(req, res) {
  try {
    await con.query('SELECT * FROM equipamento ORDER BY id', (error, result) => {
      if (error)
        return res.status(400).json(msgErro(error))
  
      res.json(result)
    })
  } catch (error) {
    return res.status(400).json(msgErro(error))
  }
})

app.get('/equipamento/:id_equip', async function(req, res) {
  try {
    const id_equip = req.params.id_equip

    await con.query('SELECT * FROM equipamento WHERE id = ?', id_equip, (error, result) => {
      if (error)
        return res.status(400).json(msgErro(error))
      else if (!result || result.length === 0)
        return res.status(400).json(msgErro('Equipamento não encontrado'))
        
      res.json(result[0])
    })
  } catch (error) {
    return res.status(400).json(msgErro(error))
  }  
})

app.put('/equipamento/:id_equip/config', async function(req, res) {
  try {
    const id_equip = req.params.id_equip
    const { parado, invertido, aceleracao } = req.body

    await con.query('SELECT * FROM equipamento WHERE id = ?', id_equip, async (error, result) => {
      if (error)
        return res.status(400).json(msgErro(error))
      else if (!result || result.length === 0)
        return res.status(400).json(msgErro('Equipamento não encontrado.'))

      await con.query('UPDATE equipamento SET parado = ?, invertido = ?, aceleracao = ? WHERE id = ?', 
        [parado, invertido, aceleracao, id_equip], (error, result) => {
        if (error)
          return res.status(400).json(msgErro(error))

        client.publish(`minha_industria/equipamento/${id_equip}/stop`, `${parado}`)
        client.publish(`minha_industria/equipamento/${id_equip}/reverse`, `${invertido}`)
        client.publish(`minha_industria/equipamento/${id_equip}/acceleration`, `${aceleracao}`)

        return res.send()
      })
    })
  } catch (error) {
    return res.status(400).json(msgErro(error))
  }  
})

app.get('/equipamento/todos/dados', async function(req, res) {
  try {
    const id_equip = req.params.id_equip

    await con.query('SELECT * FROM dados_equipamento ORDER BY id', (error, result) => {
      if (error)
        return res.status(400).json(msgErro(error))
        
      res.json(result)
    })
  } catch (error) {
    return res.status(400).json(msgErro(error))
  }
})

app.get('/equipamento/:id_equip/dados', async function(req, res) {
  try {
    const id_equip = req.params.id_equip

    await con.query('SELECT * FROM dados_equipamento WHERE id_equipamento = ?', id_equip, (error, result) => {
      if (error)
        return res.status(400).json(msgErro(error))
        
      res.json(result)
    })
  } catch (error) {
    return res.status(400).json(msgErro(error))
  }
})

app.post('/login', async function(req, res) {
  try {
    const { login, senha } = req.body

    await con.query('SELECT * FROM usuario WHERE login = ?', login, (error, result) => {
      if (error)
        return res.status(400).json(msgErro(error))
      else if (!result || result.length === 0)
        return res.status(400).json(msgErro('Usuário não encontrado'))
      else if (result[0].senha !== senha)
        return res.status(400).json(msgErro('Senha incorreta'))
      
      res.json(result)
    })
  } catch (error) {
    return res.status(400).json(msgErro(error))
  }  
})

msgErro = (erro) => {
  return `{ error: ${erro} }`
}