import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../model/product';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productList = signal<Product[]>(products);

  getProducts(): Signal<Product[]> {
    return this.productList.asReadonly();
  }
}
