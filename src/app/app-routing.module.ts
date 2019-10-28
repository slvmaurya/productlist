import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayProductComponent } from './DisplayProduct/DisplayProduct.component';
import { ProductList } from './ProductList';

const routes: Routes = [
  {path:'DisplayProduct/:Title', component:DisplayProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }