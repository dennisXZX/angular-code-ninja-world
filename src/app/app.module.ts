import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HomeModule,
    AppRoutingModule
  ]
})
export class AppModule {
}
