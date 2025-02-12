import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';
  private readonly http = inject(HttpClient);

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.URL_PRODUCTS);
  }

  
}
