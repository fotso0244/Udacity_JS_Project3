import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ProductAdd } from '../models/ProductAdd';

@Injectable({
  providedIn: 'root'
})
export class AddProdCartService {
  private _addProd = new BehaviorSubject<ProductAdd[]>([]);
  prodAdded$ = this._addProd.asObservable();
  constructor() { }
  
  sendProdsAdded(message: ProductAdd[]) {
    this._addProd.next(message);
    }
  getTotal(message: ProductAdd[]) {
    let j = 0, total = 0;
        while (j < message.length) {
            total = total + (message[j].price * message[j].quantity)
            j = j + 1
        }
        return total
  }
}
