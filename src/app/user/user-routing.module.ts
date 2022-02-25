import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: 'products', component: ProductsComponent },
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'order', component: OrderComponent },
      { path: 'cart', component: CartComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' }

    ]
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
