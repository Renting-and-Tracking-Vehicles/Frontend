import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userLogin.model';
import { JwtToken } from '../model/jwtToken.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  private baseUrlAuth:  string = environment.baseUrlAuth; 
  user: User | any;
  private baseUrlUsers: string = environment.baseUrlUser;

  jwtToken = localStorage.getItem("token");

  headers = {'Content-Type' : 'application/json',
            'Authorization' : `${localStorage.jwtToken}`}

  register(user : User){
    return this.httpClient.post<User>("http://localhost:1027/users/addUser", user).subscribe((value)=>{
      console.log(user);
      Swal.fire({
        title: 'Success!',
        text: 'You successfully registered, check your email!',
        icon: 'success',
        confirmButtonText: 'OK',
        position: 'top-right'
      });
    }, (error)=>{
      console.log(error);
    })
  }

  login(user: UserLogin){
    return this.httpClient.post<JwtToken>("http://localhost:1027/" + "users/auth/login", user).subscribe((response) => {
      var token = response.accessToken;
      localStorage.setItem("jwtToken", token);
      console.log(token);
      this.headers = {'Content-Type' : 'application/json',
                      'Authorization' : `${localStorage.jwtToken}`}
      localStorage.setItem("user", JSON.stringify(this.httpClient.get<User>("http://localhost:1027/users/auth/whoami", {headers : this.headers})))
    }, (error)=> {
      console.log(error);
    })
  }

  logout(){
    localStorage.clear();
  }
}
