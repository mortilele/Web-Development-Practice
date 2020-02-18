import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductListComponent} from './product-list/product-list.component';


const routes: Routes = [
  { path: 'categories', component: ProductListComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full'},
  { path: 'product-item/:id', component: ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
