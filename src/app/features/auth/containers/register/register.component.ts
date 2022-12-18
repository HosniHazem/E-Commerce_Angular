import { Component, OnInit } from '@angular/core';
import {InputGroup} from "../../../../shared/components/00-base/models/input.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {LoginModel} from "../../models/login.model";
import {RegisterModel} from "../../models/register.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // Form Inputs
  firstNameInputGroup = new InputGroup('user','text','First Name','firstName','firstName','John');
  lastNameInputGroup = new InputGroup('user','text','Last Name','lastName','lastName','Doe');
  emailInputGroup= new InputGroup('at-sign','email','Email','loginEmail','loginEmail',"email-adress@gmail.com");
  phoneNumberInputGroup = new InputGroup('phone','number','Phone Number','phoneNumber','phoneNumber','22333899');
  ageInputGroup = new InputGroup('calendar','number','Age','age','age','25');

  passwordInputGroup= new InputGroup('lock','password','Password','password','password',"**********");
  confirmPaswordInputGroup= new InputGroup('lock','password','Confirm Password','confirmPassword','confirmPassword',"**********");

  // Error
  error: boolean=false;

  // Form Group
  registerForm= new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]),
    phoneNumber: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    age: new FormControl('',[Validators.required, Validators.maxLength(2),Validators.maxLength(2)]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  })

  constructor(private _authService:AuthService, private router$: Router) { }

  ngOnInit(): void {
  }

  register() {
    const registerModel: RegisterModel = {
      firstName: this.registerForm.get('firstName')?.value!,
      lastName: this.registerForm.get('lastName')?.value!,
      email: this.registerForm.get('email')?.value!,
      phoneNumber: this.registerForm.get('phoneNumber')?.value!,
      age: this.registerForm.get('age')?.value!,
      password: this.registerForm.get('password')?.value!,
    }
    console.log(this._authService.register(registerModel));
    this._authService.register(registerModel).subscribe(
      (res:any) => {
        this.router$.navigateByUrl('/auth/login');
      },
      err => {
        this.error=true;
      }
    );
  }
}
