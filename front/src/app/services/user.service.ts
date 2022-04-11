import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlUsers: string = environment.baseUrlUser;

  constructor(private httpClient : HttpClient, private router: Router) {}

  findOne(id : String){
    return this.httpClient.get<User>(this.baseUrlUsers + id);
  }

  update(user : User){
    return this.httpClient.put<User>(this.baseUrlUsers + "editUser/" + user.id, user).subscribe((value)=>{
        Swal.fire({
            title: 'Success!',
            text: 'Your profile is edited successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
            position: 'top-right'
          });
          this.router.navigate(['/userProfile']);
      }, (error)=>{
        console.log(error);
      })
  }
}
