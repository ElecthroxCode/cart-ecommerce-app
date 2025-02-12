import { Component, inject, Input } from '@angular/core';
import { Product } from '../services/product-model';
import { CartService } from '../services/cartService/cart.service';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
 @Input({required:true}) product!:Product;
  private readonly _cartService = inject(CartService);
  countItems:number = 0;
  addToCart(){
    this._cartService.addToCart(this.product);
  }
}
