import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lowusers',
  templateUrl: './lowusers.component.html',
  styleUrls: ['./lowusers.component.css']
})
export class LowusersComponent implements OnInit {



  userClick = 'on';
  resellerClick ='';
  public data = [
    {username: ' ldfchala', Reseller: 'NO', Type:'Promotional',Pushing:'25',Operations:''},
    {username: ' veerendrakumar', Reseller: 'NO', Type:'Promotional',Pushing:' 30',Operations:''},
    {username: ' electclt', Reseller: 'NO', Type:'Promotional',Pushing:'70',Operations:''},
    {username: ' iuml', Reseller: 'NO', Type:'Promotional',Pushing:'60',Operations:''},
   
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

  usersChange(userVal){
  
    if(userVal == 'on'){
      this.resellerClick = 'off';
      this.userClick= 'on';
      $("#resellerForm").hide();
      $("#userForm").show();
    }else{

    }
    console.log(userVal)
  }

  resellerChange(resellerVal){
    if(resellerVal == 'on'){
      this.resellerClick = 'on';
      this.userClick= 'off';
      $("#userForm").hide();
    }

  }
}
