import { Injectable } from '@angular/core';
import { ProductAdd } from '../models/ProductAdd';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor() { }
  getProdAdded(arr: [Product, string]): ProductAdd { 
    if (arr[1] !== "") { 
      let prodAdd: ProductAdd = {
        "name": '',
        "description": '',
        "price": 0,
        "url": '',
        "id": 0,
        "quantity": 0
       };
      prodAdd["name"] = arr[0]["name"];
      prodAdd["description"] = arr[0]["description"]
      prodAdd["price"] = arr[0]["price"]
      prodAdd["url"] = arr[0]["url"]
      prodAdd["id"] = arr[0]["id"]
      prodAdd["quantity"] = parseInt(arr[1])
      
      return prodAdd
    }
    else { 
      alert('Quantity is empty')
      return  null}
    
  }
  checkProdAdded(list: ProductAdd[], prod: ProductAdd): boolean {
      let i = 0
    while (i < list.length) {
      if (list[i]["name"] === prod.name) {
        list[i]["quantity"] = prod.quantity
        return true
      }
      else {
        i += 1
      }
  }
  return false
}
}
