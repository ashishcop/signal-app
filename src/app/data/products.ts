import { Product } from '../model/product';
export const products: Product[] = [
  {
    name: 'Pen',
    expiry: Date.now(),
    price: 10,
    currencyType: 'INR',
  },
  {
    name: 'Eraser',
    expiry: Date.now(),
    price: 5.25,
    currencyType: 'INR',
  },
  {
    name: 'Scale',
    expiry: Date.now(),
    price: 15.2,
    currencyType: 'INR',
  },
  {
    name: 'Paper',
    expiry: Date.now(),
    price: 90,
    currencyType: 'INR',
  },
];
