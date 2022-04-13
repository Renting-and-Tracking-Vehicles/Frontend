import { Garage } from "./garage.model";
import { Vehicle } from "./vehicle.model";

export class RentingHistory {
    public vehicle: Vehicle;
    public startGarage: Garage;
    public endGarage: Garage;
    public durationInDays: number;
    public totalPrice: number;

    constructor (vehicle: Vehicle, startGarage: Garage, endGarage: Garage, durationInDays: number, totalPrice: number) {
        this.vehicle = vehicle;
        this.startGarage = startGarage;
        this.endGarage = endGarage;
        this.durationInDays = durationInDays;
        this.totalPrice = totalPrice;
    }
}