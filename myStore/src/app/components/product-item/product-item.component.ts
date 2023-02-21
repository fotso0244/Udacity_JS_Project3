import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product;
    @Output() AddProd: EventEmitter<[Product, string]> = new EventEmitter;
    @Output() hideProducts: EventEmitter<Product> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  hide() { 
    this.hideProducts.emit()
  }
  addToCart(arr: [Product, string]) { 
    if (parseInt(arr[1]) > 0) {
      this.AddProd.emit(arr)
    }
    else {
      alert('Please enter an integer strictly positive (> 0) quantity')
    }
    
  }

}
