import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputGroup } from './shared/components/00-base/models/input.model';
import { RadioGroup } from './shared/components/00-base/models/radio.model';
import { SelectInputGroup } from './shared/components/00-base/models/select.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'www.tn-shop.com';

  emailInputGroup= new InputGroup('eye','text','Email','','',"hello");
  passwordInputGroup= new InputGroup('eye','password','Email','','',"hello");
  selectInputGroup= new SelectInputGroup('select','select','select',[
    {
      id:'1',
      value: 'value1'
    },
    {
      id:'2',
      value: 'value2'
    },
    {
      id:'3',
      value: 'value3'
    }
  ])
  radioInputGroup= new RadioGroup('radio','radio',[
    {
      label:"Radio",
      value:"radio1",
      id:"radio1",
      disabled:false,
    },
    {
      label:"Radio2",
      value:"radio2",
      id:"radio2",
      disabled:false,
    },
  ])
  form= new FormGroup({
    email: new FormControl(''),
    checkbox: new FormControl(''),
    radio: new FormControl(''),
    select: new FormControl(''),
  })

  log(){
    console.log('Working!'); 
  }
}
