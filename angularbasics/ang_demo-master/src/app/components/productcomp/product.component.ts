import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../ProductsView/Product';


@Component({
  selector: 'app-productcomp',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private proSerice: ProductService) { }

  ngOnInit(): void {
     this.proSerice.getProducts().subscribe((products) => (
        this.products = products
     ));
  }

}