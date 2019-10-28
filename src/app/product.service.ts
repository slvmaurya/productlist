import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductList } from './ProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductList[];
                
  constructor(private http: HttpClient) { }
                
  getAll(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>('http://localhost:8012/SimpleProductListBackEnd/read.php')
  }

  public getProductByName(productName: string): Observable<ProductList[]>{
    return this.http.get<ProductList[]>('http://localhost:8012/SimpleProductListBackEnd/getByTitle.php?Title=${productName}');
}

  

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    return throwError('Error! something went wrong.');
  }
}