import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-senderid',
  templateUrl: './senderid.component.html',
  styleUrls: ['./senderid.component.css']
})
export class SenderidComponent implements OnInit {

  public data = [
    {username: '9206070103', Reseller: 'NO', Sender:'GREENG',DateTime:'2017-04-05 15:40:15',Status:'Pending',RouteType:'Transactional',ChangeStatus:'Pending',Operations:''},
    {username: 'abacus', Reseller: 'renovasoft', Sender:'GREENG',DateTime:'2015-05-11 13:04:29',Status:'Pending',RouteType:'Transactional',ChangeStatus:'Pending',Operations:''},
    {username: 'ace', Reseller: 'NO', Sender:'ACEMEP',DateTime:'2017-04-20 10:53:32',Status:'Pending',RouteType:'Promotional',ChangeStatus:'Pending',Operations:''},
    {username: 'ace', Reseller: 'NO', Sender:'ACEMEP',DateTime:'2017-04-20 10:53:32',Status:'Pending',RouteType:'Promotional',ChangeStatus:'Pending',Operations:''},
   
];
title = 'angulardatatables';
dtOptions: DataTables.Settings = {};
  senderids: any = [""];
  selecteduser: any = "";
  selectedroute: any = "";
  routestypes: any;
  username: any = "";
  users: any;
  totalsenderids: any;
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }

    this.getallsenderids();
    this.getgatewaystypes();
    this.getusers();
  }

  getallsenderids(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/users/senderids/`)
        .then(function (res) {
          console.log(res);
          self.senderids = res.data;
          self.totalsenderids = res.data.length;
          
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  addsenderID(){
    var self = this;
    console.log(self.username);
    axios.post(`http://103.214.233.141:3003/v1/secure/users/senderids/`,{
      "usersid": self.selecteduser,
      "gatewaystypesid" : self.selectedroute,
      "name" : self.username,
      "status" : "1"
    })
        .then(function (res) {
          console.log(res);
          self.getallsenderids();
          $("#closeaddmodal").click();
        })
        .catch(function (error) {
          console.log(error);
        });
  }


  getgatewaystypes(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/gateways/types?gatewaystypes[status]=1`)
        .then(function (res) {
          console.log(res);
          self.routestypes = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  getusers(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/users/profiles`)
        .then(function (res) {
          console.log(res);
          self.users = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  getsenderidbyID(senderID){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/users/senderids/${senderID}`)
        .then(function (res) {
          console.log(res);
          self.selecteduser = res.data.usersid;
          self.selectedroute = res.data.gatewaystypesid;
          // self.senderids = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

}
