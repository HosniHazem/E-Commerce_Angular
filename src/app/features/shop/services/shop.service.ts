import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShopModel} from "../../../shared/models/shop.model";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ProductModel} from "../../../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http$:HttpClient) { }

  // Create Shop
  createShop(shop:ShopModel): Observable<ShopModel>{
    return this.http$.post<ShopModel>(`${environment.API_PATH}/shop`,shop);
  }

  getProducts(): Observable<ProductModel[]>{
    return this.http$.get<any>(`${environment.API_PATH}/api/product/getAll`);
  }

}
