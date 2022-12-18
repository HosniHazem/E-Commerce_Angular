import {ShopModel} from "./shop.model";

export interface CouponModel{
  id: string;
  key: string;
  discountAmount: number;
  createdAt: Date;
  expDate: Date;

  // Relations
  shop?: ShopModel;
}
