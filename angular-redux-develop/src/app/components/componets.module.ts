import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ListProductsComponent, CartShoppingComponent, ModalComponent],
  imports: [CommonModule],
  exports: [ListProductsComponent, CartShoppingComponent, ModalComponent],
})
export class ComponentsModule {}
