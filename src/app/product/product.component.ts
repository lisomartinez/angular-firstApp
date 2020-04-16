import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() clickedProduct = new EventEmitter<number>();

  constructor() {


  }

  ngOnInit(): void {
  }

  viewDetail() {
    this.clickedProduct.emit(this.product.id);
  }
}
