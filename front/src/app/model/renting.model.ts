import { Garage } from "./garage.model";
import { Vehicle } from "./vehicle.model";

export class Renting {
    public id?: number;
    public vehicle: Vehicle;
    public userId: number;
    public totalPrice?: number;
    public durationInDays: number;
    public startDay: Date;
    public endDay?: Date;
    public startGarage?: Garage;
    public endGarage?: Garage;


    constructor (vehicle: Vehicle) {
        this.vehicle = vehicle;
        this.userId = 1;
        this.totalPrice = this.vehicle.pricePerDay;
        this.durationInDays = 1;
        this.startDay = new Date();
        this.startGarage = this.vehicle.garage;
    }
}