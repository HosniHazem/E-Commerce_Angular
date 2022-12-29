import {Component, OnInit} from '@angular/core';
import {Bem} from "../../../../../shared/functions/bem";

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  // Base Class
  baseClass: String = 'my-products'

  constructor(public bem: Bem) {
  }

  ngOnInit(): void {
  }

}
