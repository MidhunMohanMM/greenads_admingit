import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from '../_models';
import { AuthService } from '../services/auths/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  userType: any;
  count = {
    countTo: 100,
    from: 0,
    duration: 1
};
  mini: any;
  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.currentUser.subscribe(x => this.currentUser = x);
    this.userType = localStorage.getItem('type');
  }

  ngOnInit() {



    this.mini = localStorage.getItem('mini');
    if(this.mini == true){
      $("#page-wrapper").attr('style', 'margin: 0px');
    }
    
    // (function()
    // {
    //  if( window.localStorage )
    //  {
    //    if( !localStorage.getItem('firstLoad') )
    //    {
    //      localStorage['firstLoad'] = true;
    //      window.location.reload();
    //    }
    //    else
    //      localStorage.removeItem('firstLoad');
    //  }
    // })();
  }


  // navigat(){
    // var self = this;
    // self.router.navigate(['/dashboard']);
  // }
}
