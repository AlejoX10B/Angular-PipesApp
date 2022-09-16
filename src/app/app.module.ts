import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SalesModule } from "./sales/sales.module";
import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./app.router.module";

import localeEs from '@angular/common/locales/es-CO';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
registerLocaleData(localeJa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SalesModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
