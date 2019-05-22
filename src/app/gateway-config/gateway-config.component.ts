import { Component, OnInit } from '@angular/core';
// import { GatewayconfigservicesService } from '../gatewayconfigservices.service';

import axios from 'axios';
@Component({
  selector: 'app-gateway-config',
  templateUrl: './gateway-config.component.html',
  styleUrls: ['./gateway-config.component.css'],
})
export class GatewayConfigComponent implements OnInit {

  public configs ;
  load_data =  false;
  // public dtOptions: DataTables.Settings = {};
  submitted: any;

  ipAddress: any; gatewayname: any; username: any; password: any; bindMode: any; sessions: any; port: any;
  defaultrouters: any = [""];
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(  ) {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }
  //   this._configs.getConfigs().then(rsp => {
  //     this.configs = rsp;
  //     console.log(this.configs);

  //     this.load_data = true;
  // });



  // this.gateConfigForm = this.formBuilder.group({
  //   ipAddress:  ['', [Validators.required]],
  //   port: ['', Validators.required],
  //   username:  ['', [Validators.required]],
  //   password: ['', Validators.required],
  //   gatewayname:  ['', [Validators.required]],
  //   bindMode: ['', Validators.required],
  //   sessions: ['', Validators.required],

  // });

  this.getdefaultrouters();
  }
  // convenience getter for easy access to form fields
  // get f() { return this.gateConfigForm.controls; }

  getdefaultrouters(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/default/routers`)
        .then(function (res) {
          console.log(res);
          self.defaultrouters = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  onSubmit() {

    console.log('sumitted');
    this.submitted = true;
    // var form = this.gateConfigForm.value;
    // console.log(form);

  //  this.Postlogin(form.username, form.password);

  }

  addGetwayConfigs() {
   if (!this.ipAddress || !this.port || !this.username || !this.password || !this.gatewayname || !this.bindMode || !this.sessions) {
// alert();
   } else {
const data = {
            'host': this.ipAddress,
            'port': this.port,
            'system_id': '2000182290',
            'password': this.password,
            'cid': 'gupshup'
              };
              console.log(data);
        //   axios.post('http://103.214.233.141:3003/v1/secure/gateways', data)
        //   .then( res => {
        //     console.log(res);
        //   })
        //   .catch( err => {

        //       console.log(err);
        // });
   }
  }
}
