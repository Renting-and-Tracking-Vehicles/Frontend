import { Garage } from "./garage.model";

export class Vehicle {
    public id?: number;
    public model: string;
    public description: string;
    public pricePerDay: number;
    public garage: Garage;
    public images: string[];
    public rentedPeriodInDays?: number;

    constructor (model: string, description: string, pricePerDay: number, garage: Garage, images: string[]) {
        this.model = model;
        this.description = description;
        this.pricePerDay = pricePerDay;
        this.garage = garage;
        this.images = images;
    }
}