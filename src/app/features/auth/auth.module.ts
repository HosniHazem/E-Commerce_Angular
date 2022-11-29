import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'auth',
    children:[
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '**',component: LoginComponent},
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
})
export class AuthModule { }
