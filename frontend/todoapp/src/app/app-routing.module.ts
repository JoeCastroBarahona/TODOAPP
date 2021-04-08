import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendientesComponent } from './pendientes/pendientes.component';

const routes: Routes = [
  { path: '', component: PendientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
