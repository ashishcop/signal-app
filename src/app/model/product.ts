import { ExchangeRate, exchangeRate } from './../data/exchange';
import { Currency } from './currency';

export interface Product {
  name: string;
  expiry: number;
  price: number;
  currencyType: Currency;
}
