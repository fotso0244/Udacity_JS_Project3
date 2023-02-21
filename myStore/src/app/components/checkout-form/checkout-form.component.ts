import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  @Input() fullname: string
  @Input() totalCart: number
  @Input() submit: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
