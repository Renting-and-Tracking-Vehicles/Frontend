import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  findOne(id : String){
    return this.httpClient.get<User>("http://localhost:1026/users/" + id);
  }

  update(user : User){
    return this.httpClient.put<User>("http://localhost:1026/users/editUser/" + user.id, user).subscribe((value)=>{
        console.log(user);
      }, (error)=>{
        console.log(error);
      })
  }
}
