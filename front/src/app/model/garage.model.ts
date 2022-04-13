import { Address } from "./address.model";

export class Garage {
    public id?: number;
    public address: Address;
    public capacity?: number;

    constructor (id: number, address: Address, capacity: number) {
        this.id = id;
        this.address = address;
        this.capacity = capacity;
    }
}