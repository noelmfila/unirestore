import { Basket } from "../model/basket";

export interface IBasketState{
 basket: Basket | null;
 status: string;
}