import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public data = [
    {username: '9206070103', Reseller: 'NO', Sender:'GREENG',DateTime:'2017-04-05 15:40:15',Status:'Pending',RouteType:'Transactional',ChangeStatus:'Pending',Operations:''},
    {username: 'abacus', Reseller: 'renovasoft', Sender:'GREENG',DateTime:'2015-05-11 13:04:29',Status:'Pending',RouteType:'Transactional',ChangeStatus:'Pending',Operations:''},
    {username: 'ace', Reseller: 'NO', Sender:'ACEMEP',DateTime:'2017-04-20 10:53:32',Status:'Pending',RouteType:'Promotional',ChangeStatus:'Pending',Operations:''},
    {username: 'ace', Reseller: 'NO', Sender:'ACEMEP',DateTime:'2017-04-20 10:53:32',Status:'Pending',RouteType:'Promotional',ChangeStatus:'Pending',Operations:''},
   
];
title = 'angulardatatables';
dtOptions: DataTables.Settings = {};
  senderids: any;
  templates: any = [""];



  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }
    this.gettemplates();

  }

  gettemplates(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/users/templates/`)
        .then(function (res) {
          console.log(res);
          self.templates = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

}
