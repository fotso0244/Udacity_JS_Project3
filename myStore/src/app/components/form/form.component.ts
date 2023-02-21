import { Component, Output, EventEmitter } from '@angular/core';
import { AddProdCartService } from 'src/app/services/add-prod-cart.service';
import { ProductAdd } from 'src/app/models/ProductAdd';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  fullname: string
  address: string
  creditCartNumber: string
  

  @Output() validate: EventEmitter<any>= new EventEmitter()

  constructor(private addProdCartService: AddProdCartService){}

  ngOnInit():void {

  }
  onSubmit(): void {
    let prodListAdded: ProductAdd[] = []
    let total: number = 0
    let data: [string, number] = ['', 0]
    this.addProdCartService.prodAdded$.subscribe(
      message => { prodListAdded = message
      });
      total = this.addProdCartService.getTotal(prodListAdded)
      data = [this.fullname, total]
      this.validate.emit(data)
  }

}
