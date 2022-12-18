import {UserModel} from "./user.model";
import {ProductModel} from "./product.model";

export interface RateModel{
  id: string;
  rateScore: number;

  // Relations
  owner?: UserModel;
  product?: ProductModel;

}
