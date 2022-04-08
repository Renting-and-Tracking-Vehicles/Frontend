import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userLogin.model';
import { JwtToken } from '../model/jwtToken.model';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  private baseUrlUsers: string = environment.baseUrlUser;
  user: User | any;


  jwtToken = localStorage.getItem("token");

  headers = {'Content-Type' : 'application/json',
            'Authorization' : `${localStorage.jwtToken}`}

  register(user : User){
    return this.httpClient.post<User>(this.baseUrlUsers +"addUser", user).subscribe((value)=>{
      Swal.fire({
        title: 'Success!',
        text: 'You successfully registered, check your email!',
        icon: 'success',
        confirmButtonText: 'OK',
        position: 'top-right'
      });
    }, (error)=>{
        Swal.fire({
            title: 'Error',
            text: error,
            icon: 'error',
            confirmButtonText: 'OK',
            position: 'top-right'
          });
    })
  }

  login(user: UserLogin){
    return this.httpClient.post<JwtToken>(this.baseUrlUsers + "auth/login", user).subscribe((response) => {
      var token = response.accessToken;
      localStorage.setItem("jwtToken", token);
      console.log(token);
      this.headers = {'Content-Type' : 'application/json',
                      'Authorization' : `${localStorage.jwtToken}`}
      localStorage.setItem("user", JSON.stringify(this.httpClient.get<User>(this.baseUrlUsers + "auth/whoami", {headers : this.headers})))
      this.getLoggedUser().subscribe(response => this.user = response);
    }, (error)=> {
        Swal.fire({
            title: 'Error',
            text: error,
            icon: 'error',
            confirmButtonText: 'OK',
            position: 'top-right'
          });
    })
  }

  logout(){
    localStorage.clear();
  }

  getLoggedUser() {
    return this.httpClient.get<User>(this.baseUrlUsers + "auth/whoami", {headers : this.headers});
  }
}
