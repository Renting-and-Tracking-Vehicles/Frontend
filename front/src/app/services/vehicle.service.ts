import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Garage } from '../model/garage.model';
import { Renting } from '../model/renting.model';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrlVehicle: string = environment.baseUrlVehicle;
  private baseUrlRenting: string = environment.baseUrlRenting;
  private baseUrlGarage:  string = environment.baseUrlGarage;

  constructor(private httpClient : HttpClient) {}

    getAllAvailableCars() : Observable<Vehicle[]> {
         return this.httpClient.get<Vehicle[]>(this.baseUrlVehicle + 'getAvailableVehicles');
    }

    getCurrentRentedCars(userId: number) : Observable<Renting[]>{
        return this.httpClient.get<Renting[]>(this.baseUrlRenting + '/userRentings/' + userId);
    }

    rentACar(renting: Renting)  {
        return this.httpClient.post<Renting>(this.baseUrlRenting + 'startRenting', renting).subscribe((value)=>{
          }, (error)=>{
            console.log(error);
          })
    }

    finishRenting(renting: Renting) {
        this.calculateTotalPrice(renting);
        console.log(JSON.stringify(renting));
        return this.httpClient.put<Renting>(this.baseUrlRenting + 'finishRenting', renting).subscribe((value)=>{
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

    getAllAvailableGarages() : Observable<Garage[]> { return this.httpClient.get<Garage[]>(this.baseUrlGarage + 'getAll'); }
}
