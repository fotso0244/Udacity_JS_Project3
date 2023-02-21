import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';
import { ProductAdd } from 'src/app/models/ProductAdd';
import { AddProductService } from 'src/app/services/add-product.service';
import { AddProdCartService } from 'src/app/services/add-prod-cart.service';
//import {writeJsonFile} from 'write-json-file';
//import * as fs from 'fs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList: Product[] = [];
    productListAdd: ProductAdd[] = [];

  constructor(private productsService: ProductsService, private addProductService: AddProductService, private addProdCartService: AddProdCartService) { }

  ngOnInit(): void {
    
      this.productsService.getProducts().subscribe(data => {
          this.productList = data;
      })
  }
  hideProducts() { 
    this.productList = []
  }
  AddToCart(arr: [Product, string]) { console.log(arr);
    
    let newProd: ProductAdd = this.addProductService.getProdAdded(arr)
    if(this.addProductService.getProdAdded(arr) != null) { 
      if (!(this.addProductService.checkProdAdded(this.productListAdd, newProd))) {
        this.productListAdd.push(newProd);
        alert('Added to cart');
      }
      else {
        alert('Updated to cart');
      }
      this.addProdCartService.sendProdsAdded(this.productListAdd)  
    }
    

    }

}
