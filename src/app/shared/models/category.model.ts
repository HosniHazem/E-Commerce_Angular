import {ProductModel} from "./product.model";

export interface CategoryModel{
  id: string;
  name: string;

  // Relations
  products?: ProductModel[];
}
