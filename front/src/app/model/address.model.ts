export class Address {
    public streetName: string;
    public streetNumber: string;
    public city: string;
    public latitude: number;
    public longitude: number;

    constructor (streetName: string, streetNumber: string, city: string) {
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.city = city;
        this.latitude = 45.35;
        this.longitude = 19.85;
    }
}