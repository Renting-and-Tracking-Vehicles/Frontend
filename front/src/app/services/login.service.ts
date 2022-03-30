import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  register(user : User){
    console.log("aaaa")
      return this.httpClient.post<User>("http://localhost:1026/users/addUser", user).subscribe((value)=>{
        console.log(user);
      }, (error)=>{
        console.log(error);
      })

  }
}
