import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RentingHistory } from '../model/renting-history.model';
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
    images: ["https://vehicle-images-levi9.s3.amazonaws.com/images/ix.jpg"]
  };
  availableVehicles: Vehicle[] = [];
  rentedVehicles: RentingHistory[] = [
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

  //Pagination
  totalLength:any;
  page:number=1;


  ngOnInit(): void {
      this.fetchAvailableCars();
  }

    private fetchAvailableCars() {
        this.vehicleService.getAllAvailableCars().subscribe(
            data => {
                this.availableVehicles = data;
            }
        );
    }

  rentCar(vehicle: Vehicle): void {
     let renting = new Renting(vehicle, 1);
     this.vehicleService.rentACar(renting);
     Swal.fire({
        title: 'Success!',
        text: 'Vehicle successfully rented!',
        icon: 'success',
        confirmButtonText: 'OK',
        position: 'top-right'
      });
      this.fetchAvailableCars();
     (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'none';
  }

  showCarDetailsModal(event: MouseEvent, vehicle: Vehicle): void {
    event.preventDefault();
    this.selectedVehicle = vehicle;
    console.log(JSON.stringify(this.selectedVehicle));
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'flex';
    this.fetchAvailableCars();
  }

  closeCarDetailsModal(event: MouseEvent): void {
    event.preventDefault();
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'none';
  }

}
