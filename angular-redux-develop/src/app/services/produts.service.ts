import { Inject, Injectable } from '@angular/core';
import { environment } from '../shared/models/environment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutsService {
  constructor(
    @Inject('environment') private readonly environment: environment,
    private http: HttpClient
  ) {}

  getAllProduts(): Observable<any> {
    return this.http.get(`${this.environment.dummyJson}/products?limit=30`);
  }

  addCartProduct(item: any) {
    let currentCart = this.getCartShopping();
    if (currentCart.length === 0) {
      currentCart.push(item);
    }
    const isExist = this.existProduct(currentCart, item);
    if (isExist === false) {
      currentCart.push(item);
    } else {
      currentCart = isExist;
    }
    //console.log(currentCart);
    this.setCartShopping(currentCart);
  }

  deleteCartProduct(item: any) {
    let currentCart = this.getCartShopping();
    const cartUpdated = currentCart.filter(
      (single: any) => single.id !== item.id
    );
    this.setCartShopping(cartUpdated);
    return cartUpdated;
  }

  existProduct(cart: any, item: any): boolean | any {
    const isExist = cart.filter((single: any) => single?.id === item.id);
    if (isExist.length === 0) {
      return false;
    } else {
      const cartUpdated = cart.map((single: any) => {
        if (single?.id === item.id) {
          return {
            ...single,
            quantity: single.quantity++,
          };
        } else {
          return single;
        }
      });
      return cartUpdated;
    }
  }

  getCartShopping() {
    const parse = localStorage.getItem('cart') || '[]';
    return JSON.parse(parse);
  }

  setCartShopping(cart: any) {
    const parse = JSON.stringify(cart);
    localStorage.setItem('cart', parse);
  }
}
