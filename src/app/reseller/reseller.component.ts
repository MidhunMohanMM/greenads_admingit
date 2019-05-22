import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { DataservicesService } from '../services/dataservices/dataservices.service';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.css']
})
export class ResellerComponent implements OnInit {
  userstypes:any ; users: any;usertypesid:any ;
  name: any; lastname: any; email: any; phone: any;
  password: any; transLimit: any; username: any;

  public TableDatas ;
  load_data =  false;
  dtOptions: DataTables.Settings = {};
  title = 'angulardatatables';

  constructor(
    private _configs: DataservicesService
  ) { }

  ngOnInit() {
    this._configs.getResellerData().then(rsp => {
      this.TableDatas = rsp;
      console.log(this.TableDatas);
      this.load_data = true;
  });
    var self = this;

    // axios.get('http://103.214.233.141:3003/v1/secure/users')
    // .then(function (res) {
    //   console.log(res);
    //   self.users = res.data;
    //   console.log(self.users.name);
    //   this.dtOptions = {
    //     pagingType: 'full_numbers',
    //     pageLength: 5,
    //     processing: true
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  closeModal(){
    console.log('hi');
    location.reload();
    // $('#exampleModal').modal('hide');
  }
  AddNewUser() {

    if (!this.name || !this.email || !this.phone || !this.username || !this.password) {
      console.log('ggg');
    } else {
      
      const data = {
          'userspermissionsid': 3 ,
          'name': this.name ,
          'email': this.email,
          'phone': this.phone,
          'username': this.username,
          'password': this.password,
          'status': '1'
      };
      console.log(data);
      axios.post('http://103.214.233.141:3003/v1/secure/users/profiles', data)
      .then( res => {
        console.log(res);
        this.closeModal();
      })
      .catch( err => {
          console.log(err);
      });
    }
  }

}
