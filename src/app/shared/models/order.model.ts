import {UserModel} from "./user.model";
import {ProductModel} from "./product.model";

export interface OrderModel {
  id: string;
  status: string;
  createdAt: Date;

  // Relations
  user?: UserModel;
  products?: ProductModel[];
}
