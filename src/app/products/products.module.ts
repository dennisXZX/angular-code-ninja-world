import { NgModule } from '@angular/core';

import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsRoutingModule.components,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule {
}
