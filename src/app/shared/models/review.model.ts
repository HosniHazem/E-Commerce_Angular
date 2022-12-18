import {UserModel} from "./user.model";
import {ProductModel} from "./product.model";

export interface ReviewModel{
  id: string;
  reviewDescription: string;

  // Relations
  owner: UserModel;
  product: ProductModel;
}
