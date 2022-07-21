import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'cart', component:CartComponent},
  {path:'header', component:HeaderComponent},
  {path:'product', component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
