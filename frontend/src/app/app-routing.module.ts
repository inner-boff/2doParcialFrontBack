import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditdestinoComponent } from './components/addeditdestino/addeditdestino.component';
import { ListdestinoComponent } from './components/listdestino/listdestino.component';
import { ListactividadComponent } from './components/listactividad/listactividad.component';
import { IntegrantesDelEquipoComponent } from './components/integrantes-del-equipo/integrantes-del-equipo.component'
import { AddeditactComponent } from './components/addeditact/addeditact.component';
import { ListeventoComponent } from './components/listevento/listevento.component';
import { AddediteveComponent } from './components/addediteve/addediteve.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'lista-destino', component: ListdestinoComponent },
  { path:'login', component: LoginComponent },
  { path:'recuperar-password', component: RecuperarPasswordComponent },
  { path:'registrar-usuario', component: RegistrarUsuarioComponent },
  { path:'verificar-correo', component: VerificarCorreoComponent },
  { path:'add', component: AddeditdestinoComponent },
  { path:'addAct', component: AddeditactComponent },
  { path:'addEve', component: AddediteveComponent },
  { path:'listAct', component: ListactividadComponent },
  { path:'listEve', component: ListeventoComponent },
  { path:'integrantes', component: IntegrantesDelEquipoComponent },
  { path:'**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
