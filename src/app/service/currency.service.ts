import { ExchangeService } from './exchange.service';
import { exchangeRate } from './../data/exchange';
import { CurrencyInfo } from './../model/currency';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  exchangeService = inject(ExchangeService);
  private readonly currency = signal<Currency>('INR');

  currencyInfo: Signal<CurrencyInfo> = computed(() => {
    return {
      currency: this.currency(),
      exchangeRate: this.exchangeService.exchangeRate()[this.currency()],
    };
  });

  getAllCurrency(): Currency[] {
    return ['INR', 'EUR', 'USD'];
  }

  getCurrency(): Signal<CurrencyInfo> {
    return this.currencyInfo;
  }

  setCurrency(currencyValue: Currency): void {
    this.currency.set(currencyValue);
  }
}
