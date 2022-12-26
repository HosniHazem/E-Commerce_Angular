import {Component, OnInit} from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";
import {InputGroup} from "../../../../shared/components/00-base/models/input.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShopService} from "../../services/shop.service";
import {ShopModel} from "../../../../shared/models/shop.model";

@Component({
  selector: 'app-create-shop-page',
  templateUrl: './create-shop-page.component.html',
  styleUrls: ['./create-shop-page.component.scss']
})
export class CreateShopPageComponent implements OnInit {

  // Base Class
  baseClass: String = "create-shop";

  // Inputs
  nameInput = new InputGroup('briefcase', 'text', 'Name', 'nameInput', 'nameInput', 'shop name');
  emailInput = new InputGroup('mail', 'email', 'Email', 'emailInput', 'emailInput', 'shop@shop.com');
  addressInput = new InputGroup('map', 'text', 'Address', 'addressInput', 'addressInput', 'Enter your address');
  phoneInput = new InputGroup('phone', 'number', 'Phone Number', 'phoneNumber', 'phoneNumber', '22333899');
  descriptionInput = new InputGroup('', 'textarea', 'Description', 'descriptionInput', 'descriptionInput', 'write your shop description');
  createShopForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
  });

  constructor(public bem: Bem,private _shopService:ShopService) {
  }

  createShop(){
    const shopModel: ShopModel ={
      name: this.createShopForm.get('name')?.value!,
      email: this.createShopForm.get('email')?.value!,
      description: this.createShopForm.get('description')?.value!,
      address: this.createShopForm.get('address')?.value!,
      phoneNumber: this.createShopForm.get('phoneNumber')?.value!,
    }
    this._shopService.createShop(shopModel).subscribe(
      res=>{
        console.log(res);
      }, err=>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

}
