import { MockData } from './../mock-data/mock-product-data';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class ProductService {

  productsUrl = 'api/products';

  constructor(private httpClient: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
      .pipe(
      tap(products => {console.log('products fetched...');
                        console.log(products);
                      }),
      catchError(this.handleError('getProducts', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap(p => console.log(`added product with id=${p.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getHero id=${id}`))
    );
  }

  removeProduct(product: Product | number): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.httpClient.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }
}
