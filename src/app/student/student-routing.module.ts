import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RegistartionComponent } from './registartion/registartion.component';


const routes: Routes = [
  { path: 'register', component: RegistartionComponent },
  { path: 'detail', component: DetailComponent },
  {
    path: '',
    pathMatch: 'full', redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
