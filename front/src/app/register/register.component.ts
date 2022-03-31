import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userModel: User = {
        email: '',
        password: '',
        name: '',
        surname: '',
        phone: ''
    };

    hide: boolean = false;
    registerForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.maxLength(10)]),
    surname : new FormControl('', [Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone : new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')])
  })

  constructor(public loginService : LoginService) { }

  ngOnInit(): void {}

  onRegister(){
    this.loginService.register(this.userModel);
  }
}
