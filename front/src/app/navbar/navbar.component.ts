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

  constructor(private loginService: LoginService) { this.loggedUser = this.loginService.getLoggedUser(); }

  ngOnInit(): void {}

  logout(){
      this.loggedUser = null;
      this.loginService.logout();
  }

}
