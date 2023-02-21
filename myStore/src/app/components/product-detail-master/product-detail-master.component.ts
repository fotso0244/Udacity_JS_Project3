import { Component } from '@angular/core';
import { AddProductService } from 'src/app/services/add-product.service';
import { AddProdCartService } from 'src/app/services/add-prod-cart.service';
import { Product } from 'src/app/models/Product';
import { ProductAdd } from 'src/app/models/ProductAdd';

@Component({
  selector: 'app-product-detail-master',
  templateUrl: './product-detail-master.component.html',
  styleUrls: ['./product-detail-master.component.css']
})
export class ProductDetailMasterComponent {

  constructor(private addProductService: AddProductService, private addProdCartService: AddProdCartService) { }

  ngOnInit(): void {
  }
  AddToCart(arr: [Product, string]) {
    let prodListAdded: ProductAdd[] = []
    let newProd: ProductAdd = this.addProductService.getProdAdded(arr)
    this.addProdCartService.prodAdded$.subscribe(
      message => { prodListAdded = message
      });
      if(this.addProductService.getProdAdded(arr) != null) { 
        if (!(this.addProductService.checkProdAdded(prodListAdded, newProd))) {
          prodListAdded.push(this.addProductService.getProdAdded(arr)); console.log(prodListAdded);
          alert('Added to cart');
        }
        else {
          alert('Updated to cart');
        }
        
        this.addProdCartService.sendProdsAdded(prodListAdded);
      }
  } 
}
