import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ShareModule } from 'ngx-sharebuttons';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './services/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AgmCoreModule } from '@agm/core';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentHistoryComponent } from './rent-history/rent-history.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    HomePageComponent,
    NavbarComponent,
    RentHistoryComponent,
    UserProfileComponent,
    UserProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    ShareModule,
    MatFormFieldModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    SweetAlert2Module,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDuGqdjWOUzm9GKukdczdEAPA6ojdEul3g',
        libraries: ['places']
  
      })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
