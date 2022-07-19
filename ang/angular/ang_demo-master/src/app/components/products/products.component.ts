import { Component, OnInit } from '@angular/core';
import{ProductService}from'src/app/services/product.service';
import { Product} from '../../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class productsComponent implements OnInit {

  products: Product[] = [];
  
  constructor( private proService:ProductService) { }

  ngOnInit(): void {
    this.proService.getProduct().subscribe((product)=>(
      this.products=product
    ));
  }
  }


