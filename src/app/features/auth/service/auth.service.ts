import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/login.model";
import {environment} from "../../../../environments/environment";
import {RegisterModel} from "../models/register.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http$: HttpClient) { }

  login(loginDto: LoginModel): Observable<LoginModel>{
    console.log(loginDto);
   return  this.http$.post<any>(`${environment.API_PATH}/api/login/user`,loginDto);
  }

  register(registerDto: RegisterModel){
    return this.http$.post(`${environment.API_PATH}/api/signup/user`,registerDto);
  }
}
