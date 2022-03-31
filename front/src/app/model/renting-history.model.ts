import { Address } from "./address.model";

export class RentingHistory {
    public vehicleModel: string;
    public startAddress: Address;
    public endAddress: Address;
    public durationInDays: number;
    public totalPrice: number;
    public images: String[];

    constructor (vehicleModel: string, startAddress: Address, endAddress: Address, durationInDays: number, totalPrice: number,
                 images: String[]) {
        this.vehicleModel = vehicleModel;
        this.startAddress = startAddress;
        this.endAddress = endAddress;
        this.durationInDays = durationInDays;
        this.totalPrice = totalPrice;
        this.images = images;
    }
}