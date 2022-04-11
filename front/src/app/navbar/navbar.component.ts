import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUser: User | any;
  user: any;

  constructor(private loginService: LoginService) {  }

  ngOnInit(): void {
    this.user =  localStorage.getItem("user");
    if(this.user != null)
        this.loggedUser = JSON.parse(this.user);
  }

  logout(){
      this.loggedUser = null;
      this.loginService.logout();
  }

}
