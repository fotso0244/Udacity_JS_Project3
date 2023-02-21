import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailMasterComponent } from './components/product-detail-master/product-detail-master.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'shoppingCart', redirectTo: '/cart', pathMatch: 'full'},
  {path:'home', component: ProductListComponent},
  {path: 'products/:name', component: ProductDetailMasterComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
