import { Component, OnInit } from '@angular/core';
import {InputGroup} from "../../../../shared/components/00-base/models/input.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form Inputs
  emailInputGroup= new InputGroup('at-sign','email','Email','loginEmail','loginEmail',"email-adress@gmail.com");
  passwordInputGroup= new InputGroup('lock','password','Password','loginPassword','loginPassword',"**********");

  // Form Group
  loginForm= new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  login() {

  }
}
