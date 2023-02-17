import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
      this.productsService.getProducts().subscribe(data => {
          this.productList = data;
      })
  }

}
