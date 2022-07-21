import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addroCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice()
    console.log(this.cartItemList)
  }
  getTotalPrice():number{
    let grandtotal=0;
    this.cartItemList.map((a:any)=>{
      grandtotal += a.total;
    })
    return grandtotal;
  }
  removeCartitem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
