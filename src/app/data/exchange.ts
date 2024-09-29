import { Currency } from './../model/currency';

export type ExchangeRate = Record<Currency, number>;

export const exchangeRate: ExchangeRate = { INR: 5, USD: 7, EUR: 9 };
