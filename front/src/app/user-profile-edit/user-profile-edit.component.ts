import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  userModel: User = {
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    role: ''
};

    hide: boolean = false;
    registerForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.maxLength(10)]),
    surname : new FormControl('', [Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone : new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')])
    })

  constructor(public userService : UserService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.findOne(this.activatedRoute.snapshot.params['id']).subscribe(r=>{
      this.userModel = r;
    })
  }

  edit(){
    this.userService.update(this.userModel);
  }

}
