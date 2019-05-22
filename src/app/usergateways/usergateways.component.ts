import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usergateways',
  templateUrl: './usergateways.component.html',
  styleUrls: ['./usergateways.component.css']
})
export class UsergatewaysComponent implements OnInit {


  public data = [
    {username: ' MCBSKG', Reseller: 'NO', Ruser:'0',Gateway:'Unicel Promo',Prefix:'91',Credits:'1',Weightage:'100',DateTime:'2015-01-19 11:40:53',Operations:''},
    {username: ' MCBSKG', Reseller: 'NO', Ruser:'0',Gateway:'Unicel Promo',Prefix:'91',Credits:'1',Weightage:'100',DateTime:'2015-01-19 11:40:53',Operations:''},
    {username: ' MCBSKG', Reseller: 'NO', Ruser:'0',Gateway:'Unicel Promo',Prefix:'91',Credits:'1',Weightage:'100',DateTime:'2015-01-19 11:40:53',Operations:''},
    {username: ' MCBSKG', Reseller: 'NO', Ruser:'0',Gateway:'Unicel Promo',Prefix:'91',Credits:'1',Weightage:'100',DateTime:'2015-01-19 11:40:53',Operations:''},
    {username: ' MCBSKG', Reseller: 'NO', Ruser:'0',Gateway:'Unicel Promo',Prefix:'91',Credits:'1',Weightage:'100',DateTime:'2015-01-19 11:40:53',Operations:''},
    {username: ' MCBSKG', Reseller: 'NO', Ruser:'0',Gateway:'Unicel Promo',Prefix:'91',Credits:'1',Weightage:'100',DateTime:'2015-01-19 11:40:53',Operations:''},
   
];
title = 'angulardatatables';
dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
  }

}
