import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCityComponent } from './current-city.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CurrentCityComponent],
  exports: [CurrentCityComponent]
})
export class CurrentCityModule { }
