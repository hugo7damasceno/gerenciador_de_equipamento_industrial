// sensores estão definidos em productionmat.ts
/**import {ISensor} from './isensor';
import { ProductionMat } from '../entities/productionmat';
import * as Mqtt from 'mqtt';
import { URL } from 'url';

class SensorHumidity implements ISensor{
    private humidity: number;
    private subject: ProductionMat;

    id = 'hugo'
    client = Mqtt.connect(URL)

    constructor(){
        this.client.on('connect', function() {
            let channel = 'channel' + Math.random().toString()
        })
    }
    
    notify() {
        try{
            this.client.publish('teste', this.id)
        } catch(exception) {
            console.log('Conexão não estabelecida!')
        }
    }
}

export {SensorHumidity}*/