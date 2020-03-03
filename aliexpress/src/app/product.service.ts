import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { products } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient ) { }

  getProduct(id: number): Observable<any> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError(`getHero id=${id}`))
    );
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl)
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProductsByCategoryId(id: number): Observable<any> {
    return of(products.filter(product => product.category_id === id));
  }

  updateHero (product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${product.id}`)),
      catchError(this.handleError('updateHero'))
    );
  }

  private handleError(operation = 'operation', result?) {
    return (error: any): Observable<any> => {
      console.error(error); // log to console instead
      return of(result);
    };
  }

  addHero(product): Observable<any> {
    return this.http.post(this.productsUrl, product, this.httpOptions).pipe(
      tap((newHero: any) => console.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError('addHero'))
    );
  }
}
