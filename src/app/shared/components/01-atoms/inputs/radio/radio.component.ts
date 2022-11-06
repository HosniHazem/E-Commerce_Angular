import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Bem } from 'src/app/shared/functions/bem';
import { InputGroup } from '../../../00-base/models/input.model';
import { RadioGroup } from '../../../00-base/models/radio.model';

@Component({
  selector: 'c-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input('radio') radioGroup!: RadioGroup;

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
    //this.radioGroup.radioItems.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //this.onTouched = fn;
  }

  onChange(value:any) {
  }

}
