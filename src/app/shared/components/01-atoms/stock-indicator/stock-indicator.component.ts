import {Component, Input, OnInit} from '@angular/core';
import {Bem} from "../../../functions/bem";

@Component({
  selector: 'c-stock-indicator',
  templateUrl: './stock-indicator.component.html',
  styleUrls: ['./stock-indicator.component.scss']
})
export class StockIndicatorComponent implements OnInit {
  @Input('outOfStock') outOfStock: boolean= false;
  constructor(public bem:Bem) { }

  ngOnInit(): void {
  }

}
