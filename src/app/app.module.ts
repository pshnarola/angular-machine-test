import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentdeatilComponent } from './studentdeatil/studentdeatil.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistartionComponent,
    StudentdeatilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
