import { Component, OnInit } from '@angular/core';
import { RentingHistory } from '../model/renting-history.model';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-rent-history',
  templateUrl: './rent-history.component.html',
  styleUrls: ['./rent-history.component.css']
})
export class RentHistoryComponent implements OnInit {

  rentingHistory: RentingHistory[] = [];  

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getRentingHistory();
  }

  private getRentingHistory() {
    this.vehicleService.getRentingHistory(1).subscribe(data => { this.rentingHistory = data; });
  }
}
