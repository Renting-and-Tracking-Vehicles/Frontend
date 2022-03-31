import { Component, OnInit } from '@angular/core';
import { Renting } from '../model/renting.model';
import { Vehicle } from '../model/vehicle.model';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  selectedVehicle: Vehicle = {
    model: "Tesla serie 4",
    description: "Electric car",
    pricePerDay: 500,
    garage: {
        address: {
          streetName: "Trifkovicev trg",
          streetNumber: "6",
          city: "Novi Sad"
        }
    },
    images: ["../../assets/images/tesla2.jpg"]
  };
  availableVehicles: Vehicle[] = [];
  rentedVehicles: Renting[] = [
  /* {
        vehicleModel: "Tesla serie 3",
        startAddress: {
            streetName: "Trifkovicev trg",
            streetNumber: "6",
            city: "Novi Sad"
        },
        endAddress: {
            streetName: "Trifkovicev trg",
            streetNumber: "6",
            city: "Novi Sad"
        },
        durationInDays: 2,
        totalPrice: 1200,
        images: ["https://vehicle-images-levi9.s3.amazonaws.com/images/ix.jpg"]
    }*/
  ];
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
      this.vehicleService.getAllAvailableCars().subscribe(
        data => {
            this.availableVehicles = data;
          }
      );
  }

  showCarDetailsModal(event: MouseEvent, vehicle: Vehicle): void {
    event.preventDefault();
    this.selectedVehicle = vehicle;
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'flex';
  }

  closeCarDetailsModal(event: MouseEvent): void {
    event.preventDefault();
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'none';
  }

}
