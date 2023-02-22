import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from "@angular/router";
//import { AddProdCartService } from 'src/app/services/add-prod-cart.service';
import { ProductAdd } from 'src/app/models/ProductAdd';
//import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    name: string;
    prodList: Product[];
    @Output() AddProd: EventEmitter<[Product, string]> = new EventEmitter;
    
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => { this.name = params["name"]; } );
    
  }

  ngOnInit(): void {
    let i = 0;

      this.productsService.getProducts().subscribe(data => { 
        this.prodList = data;
        //alert(this.prodList.length);
        while ( i <= this.prodList.length) { 
          
          if (this.prodList[i].name != this.name) { 
            i += 1; 
          }
          else break;
        }
        
      this.product =  this.prodList[i]
      }) 
  }
  onKey(event: any) {
    const pattern = /^[1-9]/;

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/^[a-zA-Z0-9]*$/, "");
    }
  }
  addToCart(arr: [Product, string]): void {
    this.AddProd.emit(arr)
  }

}
