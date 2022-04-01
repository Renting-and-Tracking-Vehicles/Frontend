import { Vehicle } from "./vehicle.model";

export class Renting {
    public id?: number;
    public vehicle: Vehicle;
    public userId: number;
    public totalPrice?: number;
    public durationInDays?: number;
    public startDay?: Date;

    constructor (vehicle: Vehicle, userId: number) {
        this.vehicle = vehicle;
        this.userId = userId;
        this.totalPrice = 0;
        this.durationInDays = 0;
        this.startDay = new Date();
    }
}