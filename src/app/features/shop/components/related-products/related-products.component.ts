import { Component, OnInit } from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";

@Component({
  selector: 'shop-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

  // Base Clas
  baseClass: String='related-products';
  constructor(public bem:Bem) { }

  ngOnInit(): void {
  }

}
