export class User {
    public id?: number;
    public email: string;
    public password: string;
    public name: string;
    public surname: string;
    public phone: string;

    constructor (email: string, password: string, name: string, surname: string, phone: string ) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }
}