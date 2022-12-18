import {RateModel} from "./rate.model";
import {ReviewModel} from "./review.model";
import {UserModel} from "./user.model";
import {ShopModel} from "./shop.model";
import {CategoryModel} from "./category.model";

export interface ProductModel{
  id: string;
  images: string[];
  name: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  outOfStock: boolean;

  // Relations
  category: CategoryModel;
  owner: ShopModel;
  rates?: RateModel[];
  reviews?: ReviewModel[],

}
