import {UserModel} from "./user.model";
import {ProductModel} from "./product.model";

export interface ShopModel{
  id?: string;
  name: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  createdAt?: Date;

  // Relations
  owner?: UserModel;
  products?: ProductModel[];

}
