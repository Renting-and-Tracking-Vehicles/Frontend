import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Garage } from '../model/garage.model';
import { Renting } from '../model/renting.model';
import { User } from '../model/user.model';
import { Vehicle } from '../model/vehicle.model';
import { LoginService } from '../services/login.service';
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
          city: "Novi Sad",
          latitude: 44.85,
          longitude: 19.85
        }
    },
    images: ["https://vehicle-images-levi9.s3.amazonaws.com/images/ix.jpg"]
  };
  selectedRenting: Renting = {
      vehicle: this.selectedVehicle,
      userId: 1,
      startDay: new Date(),
      durationInDays: 1
  };
  searchFilter: string = '';
  filteredVehicles: Vehicle[] = [];
  availableVehicles: Vehicle[] = [];
  availableGaragesToFinishRent: Garage[] = [];
  rentedVehicles: Renting[] = [];
  loggedUser: User | any;
  user: any;

  lat = 45.26;
  long = 19.83;
  zoom=13;
  markers: any[] = [];

  constructor(private vehicleService: VehicleService, private loginService: LoginService, private router: Router) {
    this.fetchAvailableCars();
    this.fetchRentedCars();
    this.fetchAvailableGarages();
    this.user =  localStorage.getItem("user");
    if(this.user != null)
        this.loggedUser = JSON.parse(this.user);
  }

  //Pagination
  totalLength:any;
  page:number=1;

  ngOnInit(): void {}

    private fetchAvailableCars() {
        this.vehicleService.getAllAvailableCars().subscribe(data => { this.availableVehicles = data; });
    }

    private fetchAvailableGarages() {
        this.vehicleService.getAllAvailableGarages().subscribe(data => { 
            this.availableGaragesToFinishRent = data; 
            for(let garage of this.availableGaragesToFinishRent)
                this.markers.push({lat: garage.address.latitude, lng: garage.address.longitude, label: `${garage.address.streetName}`})     
        });  
    }

    private fetchRentedCars() {
        this.vehicleService.getCurrentRentedCars().subscribe(data => { this.rentedVehicles = data; });
    }

  rentCar(vehicle: Vehicle): void {
    let renting = new Renting(vehicle);
     this.vehicleService.rentACar(renting);
     Swal.fire({
        title: 'Success!',
        text: 'Vehicle successfully rented!',
        icon: 'success',
        confirmButtonText: 'OK',
        position: 'top-right'
      });
     this.fetchRentedCars();
     (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'none';
     this.fetchRentedCars();
  }

  finishRenting() : void {
    this.vehicleService.finishRenting(this.selectedRenting);
    (document.querySelector('#finish-popup') as HTMLElement).style.display = 'none';
    Swal.fire({
        title: 'Success!',
        text: 'You successfully finish renting!',
        icon: 'success',
        confirmButtonText: 'OK',
        position: 'top-right'
      });
      this.fetchRentedCars();
  }

  searchVehicles(): void {
      this.filteredVehicles = [];
      for(let vehicle of this.availableVehicles)
          if(vehicle.model.toLowerCase().indexOf(this.searchFilter) !== -1 || vehicle.garage.address.streetName.toLowerCase().indexOf(this.searchFilter) !== -1)
            this.filteredVehicles.push(vehicle);

      this.availableVehicles = this.filteredVehicles;   
  }

  filterVehicles(filterParam: string): void {
    //this.vehicleService.getAllAvailableCars().subscribe(data => { this.availableVehicles = data; });
    this.searchFilter = filterParam.toLowerCase();
    this.searchVehicles();
  }

  onFocusLost($event: Event) : void {
    this.searchFilter = "";
    this.fetchAvailableCars();
  }

  showCarDetailsModal(event: MouseEvent, vehicle: Vehicle): void {
    event.preventDefault();
    this.selectedVehicle = vehicle;
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'flex';
    this.fetchAvailableCars();
  }

  closeCarDetailsModal(event: MouseEvent): void {
    event.preventDefault();
    (document.querySelector('#vehicle-details-modal') as HTMLElement).style.display = 'none';
  }

  showFinishPopup(event: MouseEvent, renting: Renting): void {
    event.preventDefault();
    this.selectedRenting = renting;
    this.fetchAvailableGarages();
    (document.querySelector('#finish-popup') as HTMLElement).style.display = 'flex';
    this.fetchAvailableCars();
  }

  closeFinishPopup (event: MouseEvent): void {
    event.preventDefault();
    (document.querySelector('#finish-popup') as HTMLElement).style.display = 'none';
  }
}
