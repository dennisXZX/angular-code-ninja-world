import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    HomeModule,
    AppRoutingModule
  ]
})
export class AppModule {
}
