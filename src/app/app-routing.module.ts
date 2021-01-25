import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from '../app/admin-login/admin-login.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { UserLoginComponent } from '../app/user-login/user-login.component';


const routes: Routes = [
  {path:'register',component: RegistrationComponent},
  {path:'adminlogin',component:AdminLoginComponent },
  {path:'about',component:AboutUsComponent},
  {path:'login',component: UserLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
