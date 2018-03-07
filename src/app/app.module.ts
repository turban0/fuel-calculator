import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AddEditRouteComponent } from './add-edit-route/add-edit-route.component';
import { AppRoutingModule } from './/app-routing.module';
import { Routes, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    AddEditRouteComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
