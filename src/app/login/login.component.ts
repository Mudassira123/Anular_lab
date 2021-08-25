import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  iLogin: Ilogin = new Ilogin();
  constructor(private router: Router) {
    // this.username = '';
    // this.password = '';
  }

  ngOnInit(): void {}
  LoginUser() {
    debugger;
    if (
      (this.iLogin.email == 'admin@gmail.com' &&
        this.iLogin.password == 'admin') ||
      (this.iLogin.email == 'jack@gmail.com' &&
        this.iLogin.password == 'jack') ||
      (this.iLogin.email == 'rayan@gmail.com' &&
        this.iLogin.password == 'rayan')
    ) {
      console.log('welcome');
      this.router.navigateByUrl('/account');
    } else {
      console.log('invalid username or password');
      alert('invalid username or password');
    }
  }
}
export class Ilogin {
  email: string;
  password: string;
}
