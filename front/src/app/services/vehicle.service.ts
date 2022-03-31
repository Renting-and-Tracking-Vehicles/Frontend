import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl: string = environment.baseUrlVehicle;

  constructor(private httpClient : HttpClient) {}

    getAllAvailableCars() : Observable<Vehicle[]> {
        return this.httpClient.get<Vehicle[]>(this.baseUrl + 'getAvailableVehicles');
    }
}
