import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandtotal:number=0;
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.getProduct().subscribe(res=>{
      this.products=res;
      this.grandtotal=this.cartservice.getTotalPrice();
    })
  }
  removeItem(item:any){
      this.cartservice.removeCartitem(item);  
  }
  emptyCart(){
    this.cartservice.removeAllCart();
  }

}
