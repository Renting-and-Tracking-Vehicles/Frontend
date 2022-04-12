export class Redirection {
    public id: number;
    public url: string;

    constructor (price: number, intent: string ) {
        this.id = price;
        this.url = intent;
    }
}