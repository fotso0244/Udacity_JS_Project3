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
  warning1: boolean = false
  warning2: boolean = false
  warning3: boolean = false
  

  @Output() validate: EventEmitter<any>= new EventEmitter()

  constructor(private addProdCartService: AddProdCartService){}

  ngOnInit():void {

  }
  validateName(): void {
    if (this.fullname.length < 3) {
      this.warning1 = true
    }
    else {
      this.warning1 = false
    }
  }
  validateAddress(): void {
    if (this.address.length < 6) {
      this.warning2 = true
    }
    else {
      this.warning2 = false
    }
  }
  validateCreditCart(): void {
    
    if (Number.isNaN(parseInt(this.creditCartNumber)) || this.creditCartNumber.length < 16) {
      this.warning3 = true
    }
    else {
      this.warning3 = false
    }
  }
  onSubmit(): void {
    let prodListAdded: ProductAdd[] = []
    let total: number = 0
    let data: [string, number] = ['', 0]
    if (this.warning3) {
        alert('Invalid credit cart number')
        return
    }
    this.addProdCartService.prodAdded$.subscribe(
      message => { prodListAdded = message
      });
      total = this.addProdCartService.getTotal(prodListAdded)
      data = [this.fullname, total]
      this.validate.emit(data)
  }

}
