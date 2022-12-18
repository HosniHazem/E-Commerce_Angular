import {Component, OnInit} from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  // Base Class
  baseClass: String = "product-page";

  constructor(public bem: Bem) {
  }

  ngOnInit(): void {
  }

}
