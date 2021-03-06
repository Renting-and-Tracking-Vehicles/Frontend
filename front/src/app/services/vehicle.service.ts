import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Garage } from '../model/garage.model';
import { RentingHistory } from '../model/renting-history.model';
import { Renting } from '../model/renting.model';
import { User } from '../model/user.model';
import { Vehicle } from '../model/vehicle.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrlVehicle: string = environment.baseUrlVehicle;
  private baseUrlRenting: string = environment.baseUrlRenting;
  private baseUrlGarage:  string = environment.baseUrlGarage;
  private loggedUser: User | any;

  headers = {'Content-Type' : 'application/json',
            'Authorization' : `${localStorage.jwtToken}`}

  constructor(private httpClient : HttpClient, private loginService: LoginService, private router: Router) {
    this.loginService.getLoggedUser().subscribe(response => { this.loggedUser = response; });
  }

    getAllAvailableCars() : Observable<Vehicle[]> {
         return this.httpClient.get<Vehicle[]>(this.baseUrlVehicle + 'available-vehicles');
    }

    getCurrentRentedCars() : Observable<Renting[]>{
        this.loginService.getLoggedUser().subscribe(data => this.loggedUser = data)
        if(this.loggedUser){
            return this.httpClient.get<Renting[]>(this.baseUrlRenting + 'current-rentings/' + this.loggedUser.id);     
        }
        return new Observable<Renting[]>();
    }

    getRentingHistory(userId: number) : Observable<RentingHistory[]>{
        if(this.loggedUser)
             return this.httpClient.get<RentingHistory[]>(this.baseUrlRenting + 'rentings-history/' + this.loggedUser.id);
        return new Observable<RentingHistory[]>();
    }

    rentACar(renting: Renting)  {
        this.loginService.getLoggedUser().subscribe(response => { this.loggedUser = response; });
        renting.userId = this.loggedUser.id;
        return this.httpClient.post<Renting>(this.baseUrlRenting + 'start-renting', renting).subscribe((value)=>{ 
            Swal.fire({
                title: 'Success!',
                text: 'Vehicle successfully rented!',
                icon: 'success',
                confirmButtonText: 'OK',
                position: 'top-right'
              });    
          }, (error)=>{
            Swal.fire({
                title: 'Error!',
                text: 'Someone already reserved this vehicle!',
                icon: 'error',
                confirmButtonText: 'OK',
                position: 'top-right'
              })
          })
    }

    finishRenting(renting: Renting) {
        this.calculateTotalPrice(renting);
        renting.endGarage = renting.vehicle.garage;
        return this.httpClient.put<Renting>(this.baseUrlRenting + 'finish-renting', renting).subscribe((value)=>{
          }, (error)=>{
            console.log(error);
          })
    }

    calculateTotalPrice(renting: Renting) : Renting {
        renting = this.calculateRentingPeriodDuration(renting);
        renting.totalPrice = renting.durationInDays * renting.vehicle.pricePerDay;
        return renting;
    }

    calculateRentingPeriodDuration(renting: Renting) : Renting {
        renting.endDay = new Date();
        let diff = Math.abs(new Date(renting.endDay).getTime() - new Date(renting.startDay).getTime());
        renting.durationInDays = Math.ceil(diff / (1000 * 3600 * 24)); 
        return renting;
    }

    getAllAvailableGarages() : Observable<Garage[]> { return this.httpClient.get<Garage[]>(this.baseUrlGarage); }
}
