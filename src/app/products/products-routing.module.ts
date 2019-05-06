import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailGuard } from './guards/product-detail.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule {
  static components = [
    ProductListComponent,
    ProductDetailComponent
  ];
}
