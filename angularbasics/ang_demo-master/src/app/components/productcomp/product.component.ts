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
  
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
     this.proService.getProducts().subscribe((products) => (
        this.products = products
     ));
  }

  
  // productToggle(product:Product){
  //   product.reminder = !product.reminder;
    
  //   this.proService
  //       .updateProductReminder(product)
  //       .subscribe()
  // }

}