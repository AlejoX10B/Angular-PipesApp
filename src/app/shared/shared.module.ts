import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { UppercasePipe } from './pipes/uppercase.pipe';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    UppercasePipe,
    MenuComponent
  ],
  exports: [
    UppercasePipe,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
