import {OrderModel} from "./order.model";
import {ReviewModel} from "./review.model";
import {RateModel} from "./rate.model";

export interface UserModel{
  id: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: number;
  address: string;
  role: string;
  password:string;
  created_at: Date;

  // Relations
  orders?: OrderModel[];
  reviews?: ReviewModel[];
  rates?: RateModel[];
}
