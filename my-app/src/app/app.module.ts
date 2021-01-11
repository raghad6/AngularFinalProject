import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ATableComponent } from './a-table/a-table.component';
import { ARowComponent } from './a-table/a-row/a-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ATableComponent,
    ARowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
