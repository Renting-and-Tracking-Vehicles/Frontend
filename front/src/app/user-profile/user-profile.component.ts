import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  dummy : User | any;

  constructor(private loginService: LoginService, private router: Router) {
      this.loginService.getLoggedUser().subscribe(response => { this.dummy = response; });
   }

  ngOnInit(): void {
    this.loginService.getLoggedUser().subscribe(response => { this.dummy = response; });
  }

  editProfile() {
    this.router.navigate(['/userProfileEdit']);
  }

}
