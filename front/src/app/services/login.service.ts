import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userLogin.model';
import { JwtToken } from '../model/jwtToken.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient, private router: Router) { }

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
      this.router.navigate(['/login']);
    }, (error)=>{
        Swal.fire({
            title: 'Ooops',
            text: 'Already exists user with this email!',
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
      this.router.navigate(['/homePage'])
    }, (error)=> {
        Swal.fire({
            title: 'Ooops!',
            text: 'Invalid email address or password',
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
    return this.httpClient.get<User>(this.baseUrlUsers + "auth/whoami", {headers : this.headers}).pipe(
        catchError(error => { 
            /*Swal.fire({
                title: 'Error',
                text: 'Bad credentials',
                icon: 'error',
                confirmButtonText: 'OK',
                position: 'top-right'
              });*/
              this.user = null;
            return this.user;
        })
    );
  }
}
