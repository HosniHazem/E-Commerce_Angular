import { Component, OnInit } from '@angular/core';
import { Bem } from 'src/app/shared/functions/bem';

@Component({
  selector: 'shop-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent implements OnInit {

  // BaseClass
  baseClass = 'products-layout';
  
  constructor(public bem:Bem) { }

  ngOnInit(): void {
  }

}
