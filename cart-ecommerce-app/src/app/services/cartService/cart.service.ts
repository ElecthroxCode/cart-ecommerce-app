import { Injectable, OnInit } from '@angular/core';
import { DetailProduct, Product } from '../product-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

private _listProductsDetails:DetailProduct[] = [];
private _count = 0;
cartObservable$ = new BehaviorSubject<number>(0);

  constructor() { }

ngOnInit(): void {
  
}

addToCart(product:Product){
  const idProduct = product.id;
  const index = this._listProductsDetails.findIndex((p)=> p.product.id === idProduct);
  if(index === -1){
    this._listProductsDetails.push({product, count:1, total: product.price});
    this.updateCount();
  }else{
    this.updateProduct(index);
  }

}

updateCount(){
  this._count++;
  this.cartObservable$.next(this._count);
}

updateProduct(index:number){
  let objProductDetail = this._listProductsDetails[index];
  objProductDetail.count++;
  objProductDetail.total = objProductDetail.count * objProductDetail.total;
  //aumentamos el badgetcart
  this.updateCount(); 
}

getCartObservable():Observable<number>{
  return this.cartObservable$.asObservable();
}

}
