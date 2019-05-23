import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { DataservicesService } from '../services/dataservices/dataservices.service';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   userstypes:any ;
   users: any;
   usertypesid:any = "" ;
   name: any; lastname: any; email: any; phone: any; password: any; transLimit: any;
   username: any;
  public TableDatas ;
  userspermissionsid: any;
  load_data =  false;
  dtOptions: DataTables.Settings = {};
  constructor(
    private _configs: DataservicesService
  ) { }

  ngOnInit() {
const users = JSON.parse(localStorage.getItem('userdata'));
console.log(users);
this.userspermissionsid = users.userspermissionsid;

    this._configs.getUsersData().then(rsp => {
      this.TableDatas = rsp;
      console.log(this.TableDatas);
      this.load_data = true;
  });

  var self = this;
  

    // axios.get('http://103.214.233.141:3003/v1/secure/users')
    //     .then(function (res) {
    //       console.log(res);
    //       self.users = res.data;
    //       console.log(self.users.name);
    //       this.dtOptions = {
    //         pagingType: 'full_numbers',
    //         pageLength: 5,
    //         processing: true
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });


        axios.get('http://103.214.233.141:3003/v1/secure/users/permissions')
        .then(function (res) {
          console.log(res);
          self.userstypes = res.data;
          console.log(self.userstypes);
          
        })
        .catch(function (error) {
          console.log(error);
        });
       
  }

generateUUID()
{
	var d = new Date().getTime();
	
	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}
	
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

return uuid;
}

/**
 * Generate new key and insert into input value
 */



  closeModal(){
    // console.log('hi');
    this._configs.getUsersData().then(rsp => {
      this.TableDatas = rsp;
      console.log(this.TableDatas);
      this.load_data = true;
  });
    // location.reload();
    // $('#exampleModal').modal('hide');
  }
  AddNewUser() {

    if (!this.name || !this.email || !this.phone || !this.username || !this.password) {
      console.log('ggg');
    } else {

      var d = new Date().getTime();
	
      if( window.performance && typeof window.performance.now === "function" )
      {
        d += performance.now();
      }
      
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
      {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });

      console.log(uuid)
      
      const data = {
          'userspermissionsid': this.usertypesid ,
          'name': this.name ,
          'email': this.email,
          'phone': this.phone,
          'username': this.username,
          'password': this.password,
          'apikey' : uuid,
          'status': '1'
      };
      console.log(data);
      axios.post('http://103.214.233.141:3003/v1/secure/users/profiles', data)
      .then( res => {
        console.log(res);
        this.closeModal();
        $("#closemodal").click();
      })
      .catch( err => {
          console.log(err);
      });
    }
  }
}
