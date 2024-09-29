import { Component, inject, input } from '@angular/core';
import { Currency } from '../model/currency';
import { NgForOf } from '@angular/common';
import { CurrencyService } from '../service/currency.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent {
  currencyService = inject(CurrencyService);
  currencies = input.required<Currency[]>();

  selectedCurrency: Currency = 'INR';

  updateCurrency() {
    this.currencyService.setCurrency(this.selectedCurrency);
    console.log(this.currencyService.currencyInfo().currency);
  }
}
