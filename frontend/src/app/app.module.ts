import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddeditdestinoComponent } from './components/addeditdestino/addeditdestino.component';
import { ListdestinoComponent } from './components/listdestino/listdestino.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule} from '@angular/forms';
import { ListactividadComponent } from './components/listactividad/listactividad.component';
import { IntegrantesDelEquipoComponent } from './components/integrantes-del-equipo/integrantes-del-equipo.component';
import { AddeditactComponent } from './components/addeditact/addeditact.component';
import { ListeventoComponent } from './components/listevento/listevento.component';
import { AddediteveComponent } from './components/addediteve/addediteve.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/enviroments/enviroment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddeditdestinoComponent,
    ListdestinoComponent,
    ListactividadComponent,
    IntegrantesDelEquipoComponent,
    AddeditactComponent,
    ListeventoComponent,
    AddediteveComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    RecuperarPasswordComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
