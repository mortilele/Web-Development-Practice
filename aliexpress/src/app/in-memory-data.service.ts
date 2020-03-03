import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { products as productDatabase } from './products';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = productDatabase;
    return { products };
  }

  genId(products): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }

  constructor() { }
}
