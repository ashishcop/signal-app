import { Component, inject } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { CurrencyComponent } from '../currency/currency.component';
import { Currency } from '../model/currency';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currencyService = inject(CurrencyService);

  currencyInfo: Currency[] = this.currencyService.getAllCurrency();
}
