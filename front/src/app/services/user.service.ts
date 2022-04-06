import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   baseUrlUsers: string = environment.baseUrlUser;

  constructor(private httpClient : HttpClient) { }

  findOne(id : String){
    return this.httpClient.get<User>(this.baseUrlUsers + id);
  }

  update(user : User){
    return this.httpClient.put<User>(this.baseUrlUsers + "editUser/" + user.id, user).subscribe((value)=>{
        console.log(user);
      }, (error)=>{
        console.log(error);
      })
  }
}
