import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auths/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
//     $('#toggleBtn1').click(function() {
// console.log('test');
//       $('body.mini-navbar .navbar-static-side').css('width', '70px');
//     });
  }

  toggle() {

  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
