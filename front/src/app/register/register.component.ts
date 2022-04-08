import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userModel: User = {
        id: 0,
        email: '',
        password: '',
        name: '',
        surname: '',
        phone: '',
        role: 'ROLE_USER'
    };

    hide: boolean = false;
    registerForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.maxLength(10)]),
    surname : new FormControl('', [Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone : new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')])
  })

  constructor(public loginService : LoginService, private router: Router) { }

  ngOnInit(): void {}

  onRegister(){
    this.loginService.register(this.userModel);
    this.router.navigate(['/login']);
  }
}
