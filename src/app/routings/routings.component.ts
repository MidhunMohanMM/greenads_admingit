import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-routings',
  templateUrl: './routings.component.html',
  styleUrls: ['./routings.component.css']
})
export class RoutingsComponent implements OnInit {

  public data = [
    {Prefix: '91', Credits: '1', Gateway:'vMobi Promo',Priority:'1',Route:'Promotional',Weightage:'100', Status:'Blocked',Operations:''},
    {Prefix: '91', Credits: '1', Gateway:'vMobi Promo SID',Priority:'1',Route:'Promo-SID',Weightage:'100', Status:'UnBlocked',Operations:''},
    {Prefix: '91', Credits: '1', Gateway:'vMobi Promo',Priority:'1',Route:'Promotional',Weightage:'100', Status:'Blocked',Operations:''},
    {Prefix: '91', Credits: '1', Gateway:'vMobi Promo',Priority:'1',Route:'Promotional',Weightage:'100', Status:'Blocked',Operations:''},
    {Prefix: '91', Credits: '1', Gateway:'vMobi Promo',Priority:'1',Route:'Promotional',Weightage:'100', Status:'Blocked',Operations:''},
    {Prefix: '91', Credits: '1', Gateway:'vMobi Promo',Priority:'1',Route:'Promotional',Weightage:'100', Status:'Blocked',Operations:''},
   
];

ipAddress: any = "";
port: any = "";
selectedroute: any = "";
gateways: any = "";
selectedgateway: any = "";
selecteduser: any = "";
bindMode: any = "";
route: any = "";
gatewayname: any = "";

  dtOptions: DataTables.Settings = {};
 public userrouters: any = [""];
  routestypes: any;
  users: any;
  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
       pageLength: 10,
      processing: true
    }

    this.getuserrouter();
    this.getroutesType();
    this.getallusers();
    this.getallgateways();
  }

  getallusers(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/users/profiles/`)
        .then(function (res) {
          console.log(res);
          self.users = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  getuserrouter(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/users/routers/`)
        .then(function (res) {
          console.log(res);
          self.userrouters = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  addGetwayConfigs(){
    var self = this;
    axios.post(`http://103.214.233.141:3003/v1/secure/users/routers/`,{
      "usersid" : self.selecteduser,
      "gatewaystypesid": self.selectedroute,
      "gatewaysid" : self.selectedgateway,
      "status" : "1"
    })
        .then(function (res) {
          console.log(res);
          self.getuserrouter();
          $("#close").click();
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  getallgateways(){
    var self = this;
    axios.get('http://103.214.233.141:3003/v1/secure/gateways/profiles')
        .then(function (res) {
          
          self.gateways = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
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

}
