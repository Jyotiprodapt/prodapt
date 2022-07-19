import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../ProductsView/Product'
// import { faCoffee,faAddressBook  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Output() onToggleReminder: EventEmitter<Product>=new EventEmitter();
  
  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  taskToggle(product : Product)
  {
    this.onToggleReminder.emit(product);
    
  
  }

}