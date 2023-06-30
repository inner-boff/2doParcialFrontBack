import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditdestinoComponent } from './components/addeditdestino/addeditdestino.component';
import { ListdestinoComponent } from './components/listdestino/listdestino.component';
import { ListactividadComponent } from './components/listactividad/listactividad.component';

const routes: Routes = [
  { path:'', component: ListdestinoComponent },
  { path:'add', component: AddeditdestinoComponent },
  { path:'listAct', component: ListactividadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
