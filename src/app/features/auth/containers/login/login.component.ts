import { Component, OnInit } from '@angular/core';
import {InputGroup} from "../../../../shared/components/00-base/models/input.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {LoginModel} from "../../models/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // Form Inputs
  emailInputGroup= new InputGroup('at-sign','email','Email','loginEmail','loginEmail',"email-adress@gmail.com");
  passwordInputGroup= new InputGroup('lock','password','Password','loginPassword','loginPassword',"**********");

  // Error
  error: boolean=false;

  // Form Group
  loginForm= new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(private _authService:AuthService, private router$: Router) { }

  ngOnInit(): void {
  }

  login() {
    const loginModel: LoginModel = {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!,
    }
    this._authService.login(loginModel).subscribe(
      (res:any) => {
        localStorage.setItem('token',res.token);
        this.router$.navigateByUrl('/shop/');
      },
      err => {
          this.error=true;
      }
    );
  }
}
