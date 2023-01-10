import { Component, OnInit } from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";
import {ShopService} from "../../services/shop.service";
import {ProductModel} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-acceuil-page',
  templateUrl: './acceuil-page.component.html',
  styleUrls: ['./acceuil-page.component.scss']
})
export class AcceuilPageComponent implements OnInit {

  // Base Class
  baseClass: String = "acceuil";

  products: ProductModel[]=[];
  constructor(private _shopService: ShopService,public bem: Bem) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._shopService.getProducts().subscribe(
      (res: ProductModel[])=>{
           this.products= res;
      },
      (err: any)=>{
      console.log(err);
    }
    )
  }

}
