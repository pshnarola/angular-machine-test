import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { RegistartionComponent } from './registartion/registartion.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    RegistartionComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
