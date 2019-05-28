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
  routestypes: any;
  gatewayprofiles: any;
  selectedroute: any = "";
  selectedgateway: any = "";
  selectedstatus: any;
  defaultroutersid: any;

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
  this.getroutesType();
  this.getgatewayprofile();
  }
  // convenience getter for easy access to form fields
  // get f() { return this.gateConfigForm.controls; }

  getdefaultroutersbyID(defaultrouterID){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/default/routers/${defaultrouterID}`)
        .then(function (res) {
          console.log(res);
          self.selectedroute = res.data.gatewaystypesid;
          self.selectedgateway = res.data.gatewaysid;
          self.selectedstatus =  res.data.status;
          self.defaultroutersid = res.data.defaultroutersid;
        })
        .catch(function (error) {
          console.log(error);
        });
  }



  getdefaultrouters(){
    var self = this;
    axios.get(`http://103.214.233.141:3003/v1/secure/default/routers?defaultrouters[status]=1`)
        .then(function (res) {
          console.log(res);
          self.defaultrouters = res.data;
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

  adddefaultgateway(){
    var self = this;
    axios.post(`http://103.214.233.141:3003/v1/secure/default/routers/`,{
      "gatewaystypesid": self.selectedroute,
      "gatewaysid" : self.selectedgateway,
      "status" : "1"
    })
        .then(function (res) {
          console.log(res);
          self.getdefaultrouters();
          $("#closemodal").click();
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  editdefaultgateway(){
    var self = this;
    axios.put(`http://103.214.233.141:3003/v1/secure/default/routers/${self.defaultroutersid}`,{
      "gatewaystypesid": self.selectedroute,
      "gatewaysid" : self.selectedgateway,
      "status" : self.selectedstatus
    })
        .then(function (res) {
          console.log(res);
          $("#editclosemodal").click();
          self.getdefaultrouters();
      
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  deletedefaultrouter(routerID){
    var self = this;
    axios.put(`http://103.214.233.141:3003/v1/secure/default/routers/${routerID}`,{
      "status" : "0"
    })
        .then(function (res) {
          console.log(res);
          self.getdefaultrouters();
      
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
