import { Injectable } from '@angular/core';
import axios from 'axios';
import { async } from 'q';
@Injectable({
  providedIn: 'root'
})
export class GatewayconfigservicesService {
  gateways = [];

  constructor() { }

  async getConfigs() {
    await axios.get('http://103.214.233.141:3003/v1/secure/gateways')
    .then( res => {
      this.gateways =  res.data;
      console.log(this.gateways);
         })
    .catch( err => {
        console.log(err.data);
    });
    return this.gateways ? Promise.resolve(this.gateways) : Promise.resolve('Generation failed');

  }
}
