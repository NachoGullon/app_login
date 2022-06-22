import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { MotorbykeComponent } from './components/motorbyke/motorbyke.component';
import { TruckComponent } from './components/truck/truck.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'car',component:CarComponent},
  {path:'motorbyke',component:MotorbykeComponent},
  {path:'truck',component:TruckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
