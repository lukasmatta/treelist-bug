import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSplitModule } from 'angular-split';
import { DxTreeListModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule,
    DxTreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
