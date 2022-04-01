import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renting } from '../model/renting.model';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrlVehicle: string = environment.baseUrlVehicle;
  private baseUrlRenting: string = environment.baseUrlRenting;

  constructor(private httpClient : HttpClient) {}

    getAllAvailableCars() : Observable<Vehicle[]> {
        return this.httpClient.get<Vehicle[]>(this.baseUrlVehicle + 'getAvailableVehicles');
    }

    rentACar(renting: Renting)  {
        return this.httpClient.post<Renting>(this.baseUrlRenting + 'startRenting', renting).subscribe((value)=>{
            console.log(renting);
          }, (error)=>{
            console.log(error);
          })
      }
}
