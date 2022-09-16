import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { FliesPipe } from './pipes/flies.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    FliesPipe,
    SortPipe,
    UppercasePipe,
    MenuComponent,
  ],
  exports: [
    FliesPipe,
    SortPipe,
    UppercasePipe,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
