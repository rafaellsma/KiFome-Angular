import { Seller } from '../seller/seller.model';
import { Withdrawal } from '../local/local.model';
import { Meal } from '../order-meal/order-meal.model';
import { Garnish } from '../order-garnish/order-garnish.model';

export interface Review {
    Seller: Seller;
    Withdrawal: Withdrawal;
    Meal: Meal;
    Garnishies: Garnish[];
}
