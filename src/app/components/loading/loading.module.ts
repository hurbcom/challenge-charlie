import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

@NgModule({
	declarations: [ LoadingComponent ],
  	exports: [ LoadingComponent ],
  	imports: [ CommonModule ],
  	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class LoadingModule {}
