import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from '../_models';
import { AuthService } from '../services/auths/auth.service';
import { ActivatedRoute } from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  currentUser: User;
  userType: any;
  config:any;
  userData: any;
  mini: any;
  user: any; str: any;
  constructor(private route : ActivatedRoute, private router: Router,private auth: AuthService) {
    this.auth.currentUser.subscribe(x => this.currentUser = x);
    this.userType = localStorage.getItem('type');
  }
  get isSPRADM() {
    return this.currentUser && this.currentUser.role === Role.SPRADM;
}
get isOADM() {
  return this.currentUser && this.currentUser.role === Role.OADM;
}
get isRADM() {
  return this.currentUser && this.currentUser.role === Role.RADM;
}
  ngOnInit() {

    this.mini = localStorage.getItem('mini');
    console.log(this.mini);
    if(this.mini == true){
      $(".pace-done").addClass('mini-navbar');
    }

    this.userData = JSON.parse(localStorage.getItem('userdata'));
    console.log(this.userData);
    this.user = this.userData.users_permission.name;
     this.str =  this.user;
      this.str = this.str.replace(/ +/g, '');
    $('#userName').text(this.userData.users_permission.name);
    $('#userName1').text(this.userData.users_permission.name);
    if (this.userType == Role.OADM) {
      // $('.sideNavLink').css('background-color', '#607D8B');
      $('.nav-header').css('background', 'linear-gradient(to right, rgb(40, 60, 134), rgb(69, 162, 71))');
      // $('.nav-header').css('background-image', 'none');
    } else if (this.userType == Role.RADM) {
      $('.nav-header').css('background', 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))');
    }
    $("#opendropdown").click(function(){

      $("#opendropdown").toggleClass("active");
      $("#opendropdownUl").toggleClass("in");
    });
    
    $("#opendropdownUser").click(function(){

      $("#opendropdownUser").toggleClass("active");
      $("#opendropdownUlUser").toggleClass("in");
    });

    $("#opendropdownPayment").click(function(){

      $("#opendropdownPayment").toggleClass("active");
      $("#opendropdownUlPayment").toggleClass("in");
    });

    $("#opendropdownReport").click(function(){

      $("#opendropdownReport").toggleClass("active");
      $("#opendropdownUlReport").toggleClass("in");
    });

    $("#opendropdownLog").click(function(){

      $("#opendropdownLog").toggleClass("active");
      $("#opendropdownUlLog").toggleClass("in");
    });

    console.log(this.route);

    if(this.route.routeConfig.path == 'dashboard/:id'){
      $( "#dashboard" ).addClass( 'active' );

    }
    else if(this.route.routeConfig.path == 'gateways'){
       $("#opendropdown").addClass('active');
      $("#gateways").addClass('active');
    }
    else if(this.route.routeConfig.path == 'routings'){
      $("#opendropdown").addClass('active');
      $("#userrouters").addClass('active');
    }
    else if(this.route.routeConfig.path == 'gatewayconfig'){
      $("#opendropdown").addClass('active');
      $("#gateconfig").addClass('active');
    }
    else if(this.route.routeConfig.path == 'senderid'){
      $("#opendropdownsenderID").addClass('active');
    }
    else if(this.route.routeConfig.path == 'userbydate'){
      $("#opendropdownUser").addClass('active');
      $("#userbydate").addClass('active');
    }
    else if(this.route.routeConfig.path == 'users'){
      $("#opendropdownUser").addClass('active');
      $("#users").addClass('active');
    }
    else if(this.route.routeConfig.path == 'usergateways'){
      $("#opendropdownUser").addClass('active');
      $("#usergateways").addClass('active');
    }
    else if(this.route.routeConfig.path == 'changeusersgateways'){
      $("#opendropdownUser").addClass('active');
      $("#changeusergateways").addClass('active');
    }
    else if(this.route.routeConfig.path == 'lowusers'){
      $("#opendropdownUser").addClass('active');
      $("#lowusers").addClass('active');
    }
    else if(this.route.routeConfig.path == 'reseller'){
      $("#opendropdownUser").addClass('active');
      $("#reseller").addClass('active');
    }
    else if(this.route.routeConfig.path == 'payment'){
      $("#opendropdownPayment").addClass('active');
      $("#payment").addClass('active');
    }
    else if(this.route.routeConfig.path == 'totalpayment'){
      $("#opendropdownPayment").addClass('active');
      $("#totalpayment").addClass('active');
    }
    else if(this.route.routeConfig.path == 'reportbyuser'){
      $("#opendropdownReport").addClass('active');
      $("#reportbyuser").addClass('active');
    }
    else if(this.route.routeConfig.path == 'reportsbydate'){
      $("#opendropdownReport").addClass('active');
      $("#reportbydate").addClass('active');
    }
    else if(this.route.routeConfig.path == 'reportsbyroutes'){
      $("#opendropdownReport").addClass('active');
      $("#reportbyroute").addClass('active');
    }
    else if(this.route.routeConfig.path == 'template'){
      $("#templates").addClass('active');
    }
    else if(this.route.routeConfig.path == 'blocknumbers'){
      $("#blocknumbers").addClass('active');
    }
    else if(this.route.routeConfig.path == 'smpplog'){
      $("#opendropdownLog").addClass('active');
      $("#smpplog").addClass('active');
    }
    else if(this.route.routeConfig.path == 'smsque'){
      $("#opendropdownLog").addClass('active');
      $("#smsque").addClass('active');
    }
    else if(this.route.routeConfig.path == 'routegateway'){
      $("#opendropdownLog").addClass('active');
      $("#routegateway").addClass('active');
    }
    else if(this.route.routeConfig.path == 'notification'){
      $("#notification").addClass('active');
    }
    else if(this.route.routeConfig.path == 'sendmessages'){
      $("#sendmessages").addClass('active');
    }
    else if(this.route.routeConfig.path == 'userchangepassword'){
      $("#userchangepassword").addClass('active');
    }
    else if(this.route.routeConfig.path == 'userfilelink'){
      $("#userfilehits").addClass('active');
    }




    
  }

  dashboard(){
    this.router.navigate(['/dashboard/' + this.str + '']);
  }

  gateways(){
    this.router.navigate(['/gateways']);
  }
  routings(){
    this.router.navigate(['/routings']);
  }
  gatewayconfig(){
    this.router.navigate(['/gatewayconfig']);
  }
  senderid(){
    this.router.navigate(['/senderid']);
  }
  
  userbydate(){
    this.router.navigate(['/userbydate']);
  }

  users(){
    this.router.navigate(['/users']);
  }
  
  usergateways(){
    this.router.navigate(['/usergateways']);
  }
  
  changeusersgateways(){
    this.router.navigate(['/changeusersgateways']);
  }
  
  lowusers(){
    this.router.navigate(['/lowusers']);
  }

  reseller(){
    this.router.navigate(['/reseller']);
  }
  
  payment(){
    this.router.navigate(['/payment']);
  }
  totalpayment(){
    this.router.navigate(['/totalpayment']);
  }

  reportbyuser(){
    this.router.navigate(['/reportbyuser']);
  }

  reportsbydate(){
    this.router.navigate(['/reportsbydate']);
  }

  reportsbyroutes(){
    
    this.router.navigate(['/reportsbyroutes']);
  }
  template(){
    this.router.navigate(['/template']);
  }

  blocknumbers(){
    this.router.navigate(['/blocknumbers']);
  }
  smppLog(){

    this.router.navigate(['/smpplog']);
  }
  smsque(){
    this.router.navigate(['/smsque']);
  }
  routegateway(){
    this.router.navigate(['/routegateway']);
  }
  notification(){
    this.router.navigate(['/notification']);
  }
  sendmessages(){
    this.router.navigate(['/sendmessages']);
  }
  userchangepassword(){
    this.router.navigate(['/userchangepassword']);
  }
  userfilelink(){
    this.router.navigate(['/userfilelink']);
  }


  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
