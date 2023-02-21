import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductAdd } from 'src/app/models/ProductAdd';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() product;
  @Output() UpdateQty = new EventEmitter<[ProductAdd, string]>();

  constructor() { }

  ngOnInit(): void {
    
  }

  updateTotal(arr: [ProductAdd, string]) {
    this.UpdateQty.emit(arr)
  }
}
