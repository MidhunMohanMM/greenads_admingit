import { Component, OnInit } from '@angular/core';
// import {DataTableModule} from "angular-6-datatable";
import {DataTablesModule} from 'angular-datatables';
import axios from "axios";

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.css']
})
export class GatewaysComponent implements OnInit {

  ipAddress: any = "";
  port: any = "";
  bindMode: any = "";

  public data = [
    {getname: 'VMT', Description: 'vMobi Trans', Route:'therichpost.com',GSM:'Transactional',Date:'yes',Status:'2018-03-20 14:04:35',Operations:''},
    {getname: 'VMT', Description: 'vMobi Trans', Route:'therichpost.com',GSM:'Transactional',Date:'yes',Status:'2018-03-20 14:04:35',Operations:''},
    {getname: 'VMT', Description: 'vMobi Trans', Route:'therichpost.com',GSM:'Transactional',Date:'yes',Status:'2018-03-20 14:04:35',Operations:''},
    {getname: 'VMT', Description: 'vMobi Trans', Route:'therichpost.com',GSM:'Transactional',Date:'yes',Status:'2018-03-20 14:04:35',Operations:''},
   
];
title = 'angulardatatables';
dtOptions: DataTables.Settings = {};
gatewayprofiles: any = [""];

gatewayname: any = "";
host: any = "";
username: any = "";
password: any = "";
passwordconfirm: any = "";
  routestypes: any;
  gatewaysid: any;
  cid: any;
  bind: any;
  systype: any;

  constructor() {

   
   }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }

    this.getgatewayprofile();
    this.getroutesType();


  }

  getgatewaybyID(gatewayID){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/gateways/profiles/${gatewayID}`)
        .then(function (res) {
          self.gatewaysid = res.data.gatewaysid;
          self.gatewayname = res.data.name;
          self.bindMode = res.data.gatewaystypesid;
          self.host = res.data.host;
          self.port = res.data.port;
          self.username = res.data.username;
          self.cid = res.data.cid;
          self.bind = res.data.bind;
          self.systype = res.data.systype;
          
          // self.routestypes = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  
  editGetwayConfigs(){
    var self = this;
    axios.put(`http://103.214.233.141:3003/v1/secure/gateways/profiles/${self.gatewaysid}`,{
          "name": self.gatewayname,
          "host" : self.host,
          "port": self.port,
          "username": self.username,
          "password" : self.password,
          "bind" : self.bind,
          "cid" : self.cid,
          "systype" : self.systype,
          "gatewaystypesid": self.bindMode   
      })
        .then(function (res) {
          $("#gatewaymodaledit").click();
          self.getgatewayprofile();
          // window.location.reload();
          // self.routestypes = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  deletegatewaybyID(gatewayID){
    var self = this;
    axios.put(`http://103.214.233.141:3003/v1/secure/gateways/profiles/${gatewayID}`,{
            "status" : "0"
      })
        .then(function (res) {
          self.getgatewayprofile();
          // window.location.reload();
          // self.routestypes = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }


  addGetwayConfigs(){
    var self = this;

    var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 5; i++ ) {
      result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   console.log(result);


    axios.post('http://103.214.233.141:3003/v1/secure/gateways/profiles',{

    "configs":
    {
        "name": self.gatewayname,
        "host" : self.host,
        "port": self.port,
        "username": self.username,
        "password" : self.password,
        "bind" : "transceiver",
        "cid" : result,
        "systype" : "greenads"
    },
    "options":
    {
        "gatewaystypesid": self.bindMode,
        "status": "1"   
    }
    })
        .then(function (res) {
          console.log(res.data);
      
        })
        .catch(function (error) {
          console.log(error);
        });

        window.location.reload();
  }

  getroutesType(){
    var self = this;
    axios.get('http://103.214.233.141:3003/v1/secure/gateways/types')
        .then(function (res) {
          
          self.routestypes = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }


  getgatewayprofile(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/gateways/profiles?gateways[status]=1`)
        .then(function (res) {
          console.log(res);
          self.gatewayprofiles = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }


}
