import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { EstatusComponent } from './components/estatus/estatus.component';
import { CatFisicoComponent } from './components/cat-fisico/cat-fisico.component';
import { CatDigitalComponent } from './components/cat-digital/cat-digital.component';
import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';
import { InicioadminComponent } from './components/inicioadmin/inicioadmin.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { InformesComponent } from './components/informes/informes.component';
import { AltalibrosfisicosComponent } from './components/altalibrosfisicos/altalibrosfisicos.component';
import { BajalibrosfisicosComponent } from './components/bajalibrosfisicos/bajalibrosfisicos.component';
import { BajalibrosdigitalesComponent } from './components/bajalibrosdigitales/bajalibrosdigitales.component';
import { AltalibrosdigitalesComponent } from './components/altalibrosdigitales/altalibrosdigitales.component';



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
    CatFisicoComponent,
    CatDigitalComponent,
    InventarioComponent,
    InicioadminComponent,
    InformesComponent,
    FooterComponent,
    NavigationAdminComponent,
    AltalibrosfisicosComponent,
    BajalibrosfisicosComponent,
    BajalibrosdigitalesComponent,
    AltalibrosdigitalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BooksService // este tendrá los métodos para pedir los datos.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
