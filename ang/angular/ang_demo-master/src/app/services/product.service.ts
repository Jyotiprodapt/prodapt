import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Products } from '../mock_data';
import { Product } from '../Product';

const httpOption={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl="http://localhost:4201/products"

  constructor(private http:HttpClient) { }

  getProduct(): Observable<Product[]> { 
    //const products = of(Products);
    //return products;
    return this.http.get<Product[]>(this.apiUrl);
  }
}

