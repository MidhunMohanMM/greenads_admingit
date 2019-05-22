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
bindMode: any = "";
route: any = "";
gatewayname: any = "";

  dtOptions: DataTables.Settings = {};
  userrouters: any = [""];
  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
       pageLength: 10,
      processing: true
    }

    this.getuserrouter();
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

  }

}
