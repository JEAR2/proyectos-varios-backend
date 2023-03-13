import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.scss'],
})
export class CartShoppingComponent implements OnInit, OnChanges {
  @Input() showCart: boolean = false;
  @Output() submitPay = new EventEmitter<any>();
  @Output() submitRemove = new EventEmitter<any>();
  @Input() cartItems: Array<any> = [];
  totalItems: number = 0;
  totalPrice: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getTotalItem();
    this.getTotalPrice();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getTotalItem();
    this.getTotalPrice();
  }
  handleShowCart() {
    this.showCart = !this.showCart;
  }

  getTotalItem() {
    if (this.cartItems) {
      this.totalItems = 0;
      this.cartItems.map((item) => {
        this.totalItems += item.quantity || 0;
      });
    }
  }

  getTotalPrice() {
    if (this.cartItems) {
      this.totalPrice = 0;
      this.cartItems.map((item) => {
        const subTotal = (item.quantity || 0) * item.price;
        this.totalPrice += subTotal;
      });
    }
  }
}
