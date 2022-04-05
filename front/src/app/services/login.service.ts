import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userLogin.model';
import { JwtToken } from '../model/jwtToken.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  private baseUrlAuth:  string = environment.baseUrlAuth; 

  jwtToken = localStorage.getItem("token");

  headers = {'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${localStorage.jwtToken}`}

  register(user : User){
    return this.httpClient.post<User>("http://localhost:1026/users/addUser", user).subscribe((value)=>{
      console.log(user);
    }, (error)=>{
      console.log(error);
    })
  }

  login(user: UserLogin){
    return this.httpClient.post<JwtToken>(this.baseUrlAuth + "login", user).subscribe((response) => {
      var token = response.accessToken;
      localStorage.setItem("jwtToken", token);
      console.log(token);
    }, (error)=> {
      console.log(error);
    })
  }
}
