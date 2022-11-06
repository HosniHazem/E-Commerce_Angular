import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Bem } from 'src/app/shared/functions/bem';
import { InputGroup } from '../../../00-base/models/input.model';

@Component({
  selector: 'c-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['../input.scss','./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  @Input('input') inputGroup!: InputGroup;
  baseClass = 'input-group';
  constructor(
    public bem: Bem,
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  value: any = '';

  ngOnInit() {}

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.inputGroup.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //this.onTouched = fn;
  }

  onChange(value: any) {}


  // Password toggler
  // ----------------------------------
  passwordIsHidden=true;
  showPassword() {
    !this.passwordIsHidden ? this.inputGroup.type='password' : this.inputGroup.type='text'
    this.passwordIsHidden=!this.passwordIsHidden;
  }
}
