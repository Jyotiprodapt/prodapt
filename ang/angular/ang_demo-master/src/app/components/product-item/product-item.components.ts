import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.components.html',
  styleUrls: ['./product-item.components.css']
})
export class ProductItemComponents implements OnInit {

  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}