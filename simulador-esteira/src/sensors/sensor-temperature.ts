import {ISensor} from '../sensors/isensor';
import { ProductionMat } from '../entities/productionmat';
import * as Mqtt from 'mqtt';
import { URL } from 'url';



class SensorTemperature implements ISensor{
    private temperaure: number;
    private subject: ProductionMat;

    id = 'hugo'
    client = Mqtt.connect(URL)

    constructor(){
        this.client.on('connect', function (){
            let channel = 'channel' + Math.random().toString()
         /*   client.subscribe(channel, function(err){
                if(err){

                }
            })*/
        })
    }
    
    notify(){
        try{
            this.client.publish('teste', this.id)
        } catch(exception){
            console.log('Conexão não estabelecida!')
        }
    }

    

}

export {SensorTemperature}