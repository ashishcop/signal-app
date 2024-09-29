import { Component, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CurrencyPipe, DatePipe, NgForOf } from '@angular/common';
import { CurrencyService } from '../service/currency.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, DatePipe, CurrencyPipe, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productService = inject(ProductService);
  currencyService = inject(CurrencyService);

  productList = this.productService.getProducts();
  currencyInfo = this.currencyService.getCurrency();
}
