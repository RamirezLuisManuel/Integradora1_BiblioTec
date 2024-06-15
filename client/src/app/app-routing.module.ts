import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component'; 
import { NovedadesComponent } from './components/novedades/novedades.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { EstatusComponent } from './components/estatus/estatus.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'inicio',
    component : InicioComponent
  },
  {
    path : 'novedades',
    component : NovedadesComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'recuperar',
    component : RecuperarComponent
  },
  {
    path : 'verificacion',
    component : VerificacionComponent
  },
  {
    path : 'estatus',
    component : EstatusComponent
  },
  {
    path : 'registro',
    component : RegistroComponent 
  },
  {
    path : 'catalogo',
    component : CatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
