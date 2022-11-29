import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bem } from 'src/app/shared/functions/bem';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('type') type!: String;
  @Input('content') content?: String | null;
  @Input('iconType') iconType: String="gray";
  @Input('icon') icon?: string | null;
  @Output('submit') submit = new EventEmitter<any>();

  baseClass: String = 'button';
  constructor(public bem: Bem) {}

  ngOnInit(): void {}

  submitFunc(){
    this.submit.emit()
  }
}
