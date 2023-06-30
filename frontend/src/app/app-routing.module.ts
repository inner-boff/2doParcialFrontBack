import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditdestinoComponent } from './components/addeditdestino/addeditdestino.component';
import { ListdestinoComponent } from './components/listdestino/listdestino.component';
import { ListactividadComponent } from './components/listactividad/listactividad.component';
import { IntegrantesDelEquipoComponent } from './components/integrantes-del-equipo/integrantes-del-equipo.component'

const routes: Routes = [
  { path:'', component: ListdestinoComponent },
  { path:'add', component: AddeditdestinoComponent },
  { path:'listAct', component: ListactividadComponent },
  { path:'integrantes', component: IntegrantesDelEquipoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
