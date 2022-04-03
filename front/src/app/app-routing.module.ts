import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RentHistoryComponent } from './rent-history/rent-history.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegisterComponent},
  { path: 'history', component: RentHistoryComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'userProfile', component: UserProfileComponent},
  { path: 'userProfileEdit/:id', component: UserProfileEditComponent},
  { path: '',   redirectTo: 'landingPage', pathMatch: 'full'},
  { path: '**', redirectTo: 'landingPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
