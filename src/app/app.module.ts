import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminService } from './admin.service';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { DataTableModule } from "angular-6-datatable";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    DataTableModule,
    BrowserAnimationsModule,
    SatPopoverModule

  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
