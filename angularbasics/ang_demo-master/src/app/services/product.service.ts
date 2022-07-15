import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { PRODUCTS } from '../components/ProductsView/mockdata';
import { Product } from '../components/ProductsView/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl="http://localhost:4201/"
  constructor(private http:HttpClient) { }
  
getProducts():Observable<Product[]>{
  // const products = of(PRODUCTS);
  // return products;

  return this.http.get<Product[]>(this.apiUrl);
}
}