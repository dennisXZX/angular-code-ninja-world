import { NgModule } from '@angular/core';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent
  ]
})
export class SharedModule { }
