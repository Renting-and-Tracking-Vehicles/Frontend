import { Component, OnInit } from '@angular/core';
import { Renting } from '../model/renting.model';
import { Vehicle } from '../model/vehicle.model';

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
  availableVehicles: Vehicle[] = [
    {
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
    },
    {
        model: "Tesla serie 3",
        description: "Electric car",
        pricePerDay: 450,
        garage: {
            address: {
              streetName: "Hadzi Ruvimova",
              streetNumber: "8",
              city: "Beograd"
            }
        },
        images: ["../../assets/images/tesla3.jpg"]
    },
  ];
  rentedVehicles: Renting[] = [
    /*{
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
        images: ["../../assets/images/tesla3.jpg"]
    }*/
  ];
  constructor() {}

  ngOnInit(): void {}

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
