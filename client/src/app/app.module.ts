import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navegacion/navigation/navigation.component';
import { InicioComponent } from './components/usuario/inicio/inicio.component';
import { FooterComponent } from './components/navegacion/footer/footer.component';
import { FooteradminComponent } from './components/navegacion/footeradmin/footeradmin.component';
import { NavigationAdminComponent } from './components/navegacion/navigation-admin/navigation-admin.component';
import { InicioadminComponent } from './components/admin/inicioadmin/inicioadmin.component';
import { NovedadesAdComponent } from './components/admin/novedades-ad/novedades-ad.component';
import { CrudComponent } from './components/admin/crud/crud.component';
import { AgregarlibroComponent } from './components/admin/agregarlibro/agregarlibro.component';
import { CatDigitalComponent } from './components/usuario/cat-digital/cat-digital.component';
import { CatFisicoComponent } from './components/usuario/cat-fisico/cat-fisico.component';
import { EstatusComponent } from './components/usuario/estatus/estatus.component';
import { PrestamosComponent } from './components/admin/prestamos/prestamos.component';
import { MultasComponent } from './components/admin/multas/multas.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { NovedadesComponent } from './components/usuario/novedades/novedades.component';
import { CopialibroComponent } from './components/admin/copialibro/copialibro.component';
import { AgregarcopiaComponent } from './components/admin/agregarcopia/agregarcopia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InicioComponent,
    InicioadminComponent,
    FooterComponent,
    FooteradminComponent,
    NavigationAdminComponent,
    NovedadesAdComponent,
    CrudComponent,
    NovedadesComponent,
    AgregarlibroComponent,
    CatDigitalComponent,
    CatFisicoComponent,
    EstatusComponent,
    PrestamosComponent,
    MultasComponent,
    UsuariosComponent,
    PerfilComponent,
    LoginComponent,
    RolesComponent,
    CopialibroComponent,
    AgregarcopiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BooksService, // este tendrá los métodos para pedir los datos.
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
