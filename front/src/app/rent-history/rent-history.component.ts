import { Component, OnInit } from '@angular/core';
import { RentingHistory } from '../model/renting-history.model';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-rent-history',
  templateUrl: './rent-history.component.html',
  styleUrls: ['./rent-history.component.css']
})
export class RentHistoryComponent implements OnInit {

  rentingHistory: RentingHistory[] = [];  
  loggedUser: User | any;

  constructor(private vehicleService: VehicleService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedUser = this.loginService.getLoggedUser();
    this.getRentingHistory();
  }

  private getRentingHistory() {
    this.vehicleService.getRentingHistory(this.loggedUser.id).subscribe(data => { this.rentingHistory = data; });
  }
}
