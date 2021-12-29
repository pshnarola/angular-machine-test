import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistartionComponent } from './registartion/registartion.component';
import { StudentdeatilComponent } from './studentdeatil/studentdeatil.component';


const routes: Routes = [
  { path: "registartion", component: RegistartionComponent },
  { path: "detail", component: StudentdeatilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
