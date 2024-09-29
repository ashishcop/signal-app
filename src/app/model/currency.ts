export type Currency = 'INR' | 'EUR' | 'USD';
export interface CurrencyInfo {
  currency: Currency;
  exchangeRate: number;
}
