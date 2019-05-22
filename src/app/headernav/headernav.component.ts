import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auths/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {
  mini: string;
  i: any = "0";

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.mini = localStorage.getItem('mini');

//     $('#toggleBtn1').click(function() {
// console.log('test');
//       $('body.mini-navbar .navbar-static-side').css('width', '70px');
//     });
  }

  toggle() {
      if(this.mini == "true"){
          this.mini = "false";
      }
      else{
        this.mini = "true";
      }
 

    localStorage.setItem('mini', this.mini);

  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  
}
