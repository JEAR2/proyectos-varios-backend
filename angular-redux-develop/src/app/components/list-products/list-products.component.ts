import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  @Input() products: Array<any> = [];
  @Output() submitBuy = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
