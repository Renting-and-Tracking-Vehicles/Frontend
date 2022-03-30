import { Address } from "./address.model";

export class Renting {
    public vehicleModel: string;
    public startAddress: Address;
    public endAddress: Address;
    public durationInDays: number;
    public totalPrice: number;

    constructor (vehicleModel: string, startAddress: Address, endAddress: Address, durationInDays: number, totalPrice: number) {
        this.vehicleModel = vehicleModel;
        this.startAddress = startAddress;
        this.endAddress = endAddress;
        this.durationInDays = durationInDays;
        this.totalPrice = totalPrice;
    }
}