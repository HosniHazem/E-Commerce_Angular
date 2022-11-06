import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Bem } from 'src/app/shared/functions/bem';
import { InputGroup } from '../../../00-base/models/input.model';

@Component({
  selector: 'c-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../input.scss', './checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input('checkbox') inputGroup!: InputGroup;
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

  value = '';

  ngOnInit(): void {}

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
}
