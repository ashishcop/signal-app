import { Currency } from './../model/currency';
import { Injectable, Signal, signal } from '@angular/core';
import { exchangeRate, ExchangeRate } from '../data/exchange';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private readonly exchange = signal<ExchangeRate>(exchangeRate);

  public get exchangeRate(): Signal<ExchangeRate> {
    return this.exchange.asReadonly();
  }
}
