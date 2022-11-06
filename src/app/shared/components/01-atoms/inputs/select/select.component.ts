import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Bem } from 'src/app/shared/functions/bem';
import { SelectInputGroup } from '../../../00-base/models/select.model';

@Component({
  selector: 'c-select',
  templateUrl: './select.component.html',
  styleUrls: ['../input.scss','./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input('select') selectInputGroup!: SelectInputGroup;
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

  onChange(value: any) {}
}
