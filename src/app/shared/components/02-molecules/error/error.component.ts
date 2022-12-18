import {Component, Input, OnInit} from '@angular/core';
import {Bem} from "../../../functions/bem";

@Component({
  selector: 'c-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  // Base Class
  baseClass: String= "error"

  @Input('message') message: String = "This is an error";
  @Input('style') style: String= 'info';
  @Input('canClose') canClose: boolean=false;
  constructor(public bem:Bem) { }

  ngOnInit(): void {
  }

}
