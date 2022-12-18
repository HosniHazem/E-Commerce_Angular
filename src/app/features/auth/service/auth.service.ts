import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/login.model";
import {environment} from "../../../../environments/environment";
import {RegisterModel} from "../models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http$: HttpClient) { }

  login(loginDto: LoginModel){
   return  this.http$.post(`${environment.API_PATH}/auth/login`,loginDto);
  }

  register(registerDto: RegisterModel){
    return this.http$.post(`${environment.API_PATH}/auth/register`,registerDto);
  }
}
