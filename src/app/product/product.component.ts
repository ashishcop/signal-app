import { Component, input } from '@angular/core';
import { CurrencyInfo } from '../model/currency';
import { Product } from '../model/product';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product = input.required<Product>();
  currencyInfo = input.required<CurrencyInfo>();
}
