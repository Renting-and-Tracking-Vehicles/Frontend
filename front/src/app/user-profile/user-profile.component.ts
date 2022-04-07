import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  dummy : User = {
    name: "Pavle",
    surname: "Sarenac",
    password: "123456",
    email: "psarenac@gmail.com",
    phone: "021322123",
    role: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
