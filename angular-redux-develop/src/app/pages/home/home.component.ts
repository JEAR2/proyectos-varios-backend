import { Component, OnInit } from '@angular/core';
import { ProdutsService } from 'src/app/services/produts.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Array<any> = [];
  cartShopping: Array<any> = [];
  showModal: boolean = false;
  totalCheckout: number = 0;

  constructor(private productService: ProdutsService) {}

  ngOnInit(): void {
    this.productService.getAllProduts().subscribe({
      next: (res) => {
        const { products } = res;
        this.products = products;
      },
    });
    this.loadCartShopping();
  }

  fillCartShopping(product: any) {
    const { id, title, description, price, thumbnail } = product;

    this.productService.addCartProduct({
      id,
      title,
      description,
      price,
      thumbnail,
      quantity: 1,
    });
    this.loadCartShopping();
  }

  loadCartShopping() {
    this.cartShopping = this.productService.getCartShopping();
  }

  removeCartItem(product: any) {
    this.cartShopping = this.productService.deleteCartProduct(product);
  }

  checkout(total: any) {
    this.showModal = true;
    this.totalCheckout = total;
    this.productService.setCartShopping([]);
    this.loadCartShopping();
    console.log('chekc', total);
  }
}
