import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddeditdestinoComponent } from './components/addeditdestino/addeditdestino.component';
import { ListdestinoComponent } from './components/listdestino/listdestino.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule} from '@angular/forms';
import { ListactividadComponent } from './components/listactividad/listactividad.component';
import { IntegrantesDelEquipoComponent } from './components/integrantes-del-equipo/integrantes-del-equipo.component'


@NgModule({
  declarations: [
    AppComponent,
    AddeditdestinoComponent,
    ListdestinoComponent,
    ListactividadComponent,
    IntegrantesDelEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
