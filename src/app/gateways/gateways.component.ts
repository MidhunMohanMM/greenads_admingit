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
  constructor() {

   
   }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }

    this.getgatewayprofile();



  }

  addGetwayConfigs(){

  }

  getgatewayprofile(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/gateways/profiles`)
        .then(function (res) {
          console.log(res);
          self.gatewayprofiles = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }


}
