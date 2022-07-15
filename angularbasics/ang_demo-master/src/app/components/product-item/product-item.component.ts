import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../ProductsView/Product'
// import { faCoffee,faAddressBook  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}