import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from "../prime-ng/prime-ng.module";

import { BasicsComponent } from './pages/basics/basics.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { SortComponent } from './pages/sort/sort.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BasicsComponent,
    NoCommonsComponent,
    NumbersComponent,
    SortComponent
  ],
  exports: [
    BasicsComponent,
    NoCommonsComponent,
    NumbersComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class SalesModule { }
