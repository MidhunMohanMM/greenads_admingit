import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { AuthService } from '../services/auths/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: any;
  password: any;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public auth: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:  ['', [Validators.required]],
      password: ['', Validators.required]

    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit(){

    console.log('sumitted');
    this.submitted = true;
    var form = this.loginForm.value;
    console.log(form.username);

   this.Postlogin(form.username, form.password);

  }

  Postlogin(username, password) {

    var data = {
      "username": username,
      "password": password
    };
console.log(data);
    if (username != '' ){

      if (password != '') {
      this.auth.goLogin(data);
        // this.router.navigate(['/dashboard']);
      }

    }

  }
}
