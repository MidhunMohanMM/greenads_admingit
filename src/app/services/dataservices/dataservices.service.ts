import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DataservicesService {
  Datas = [];
  ResellerData = [];
  ResellerDataFiltered = [];
  constructor() { }


  async getUsersData() {
    await axios.get('http://103.214.233.141:3003/v1/secure/users/profiles')
    .then( res => {
      this.Datas =  res.data;
      // console.log(this.Datas);
         })
    .catch( err => {
        console.log(err.data);
    });
    return this.Datas ? Promise.resolve(this.Datas) : Promise.resolve('Generation failed');

  }

  async getResellerData() {
    await axios.get('http://103.214.233.141:3003/v1/secure/users/profiles')
    .then( res => {
      // if(res.data.userspermissionsid == 3){
      this.ResellerData =  res.data;

      for(var i=0;i<res.data.length ;i++){
        if(res.data[i].userspermissionsid == 3){
        this.ResellerDataFiltered.push(res.data[i])
        }
      }
      // console.log(this.ResellerDataFiltered);
      // }
         })
    .catch( err => {
        console.log(err.data);
    });
    return this.ResellerDataFiltered ? Promise.resolve(this.ResellerDataFiltered) : Promise.resolve('Generation failed');

  }
}
