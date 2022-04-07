import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLogin } from '../model/userLogin.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserLogin = {
    email: '',
    password: ''
};
    hide: boolean = false;
    loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  constructor(public loginService : LoginService, private router : Router) { }

  ngOnInit(): void {}

  onLogin(){
    console.log(this.userModel);
    this.loginService.login(this.userModel);
    this.router.navigate(['/homePage']);
  }

}


