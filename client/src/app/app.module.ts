import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { EstatusComponent } from './components/estatus/estatus.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InicioComponent,
    NovedadesComponent,
    LoginComponent,
    RecuperarComponent,
    VerificacionComponent,
    EstatusComponent,
    RegistroComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BooksService // este tendrá los métodos para pedir los datos.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
