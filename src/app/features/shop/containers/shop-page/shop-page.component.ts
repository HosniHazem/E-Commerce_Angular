import {Component, OnInit} from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  baseClass: string = "shop-page";
  constructor(public bem: Bem) {
  }

  ngOnInit(): void {
  }

}
