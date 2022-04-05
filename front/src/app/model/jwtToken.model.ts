export class JwtToken {
    public accessToken: string;
    public expiresIn: string;

    constructor (accessToken: string, expiresIn: string ) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
}