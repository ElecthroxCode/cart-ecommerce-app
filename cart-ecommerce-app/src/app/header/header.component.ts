import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../services/cartService/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
private readonly _cartService = inject(CartService);
countItems = 0;
ngOnInit(): void {
  this._cartService.getCartObservable().subscribe(
    {
      next: (data) => this.countItems = data,
      error: (err) => console.log('Se produjo un error:', err)
    }
  );
}
}
