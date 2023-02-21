import { Component, OnInit } from '@angular/core';
import { AddProdCartService } from 'src/app/services/add-prod-cart.service';
import { ProductAdd } from 'src/app/models/ProductAdd';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  prodListAdded: ProductAdd[] = []
  total: number
  submit: boolean = false
  fullname: string
  totalCart: number

  constructor(private addProdCartService: AddProdCartService) { }

  ngOnInit(): void {
    this.addProdCartService.prodAdded$.subscribe(
      message => { this.prodListAdded = message; })
      let j = 0, total = 0;
        while (j < this.prodListAdded.length) {
            total = total + (this.prodListAdded[j].price * this.prodListAdded[j].quantity)
            j = j + 1
        }
        this.total = total
  }
  UpdateTotal(arr: [ProductAdd, string]): void {
    let prodList: ProductAdd[] = []
    let i = 0
    this.addProdCartService.prodAdded$.subscribe(
      message => { prodList = message
        
     }); 
     if (arr[1] !== "0") {
      while (i < prodList.length) {
        if (prodList[i]["name"] === arr[0]["name"]) {
          prodList[i]["quantity"] = parseInt(arr[1])
          break
        }
        else {
          i += 1
        }
      }
      
      this.prodListAdded = prodList
      
    }
    else {
      this.prodListAdded = this.prodListAdded.filter(p => p.id !== arr[0].id)
       alert('Removed from cart');
      
    }
     console.log(this.prodListAdded);

        this.total = this.addProdCartService.getTotal(this.prodListAdded)
        this.addProdCartService.sendProdsAdded(this.prodListAdded)
  }
  submitForm(arr: [string, number]): void {
    this.prodListAdded = []
    this.submit = true
    this.fullname = arr[0]
    this.totalCart = arr[1]
  }
  
}
