export class Address {
    public streetName: string;
    public streetNumber: string;
    public city: string;

    constructor (streetName: string, streetNumber: string, city: string) {
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.city = city;
    }
}