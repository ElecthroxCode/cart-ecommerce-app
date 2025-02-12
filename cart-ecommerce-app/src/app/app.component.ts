import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ProductsService } from './services/products.service';
import { Product } from './services/product-model';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardProductComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  
private readonly productService = inject(ProductsService)
products:Product[] = [];

ngOnInit(): void {
  this.productService.getProducts().subscribe(
    {
      next: (data) => this.products = data,
      
      error: (err) => console.log("Se ha producido un error: ", err)
    }
  );
}

}
