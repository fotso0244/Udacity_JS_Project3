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
  onKey(event: any) {
    const pattern = /^[1-9]/;

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/^[a-zA-Z0-9]*$/, "");
    }
  }
  addToCart(arr: [Product, string]) { 
    
      this.AddProd.emit(arr)
  }

}
