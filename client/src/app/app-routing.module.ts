import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component'; 
import { NovedadesComponent } from './components/novedades/novedades.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { EstatusComponent } from './components/estatus/estatus.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CatFisicoComponent } from './components/cat-fisico/cat-fisico.component';
import { CatDigitalComponent } from './components/cat-digital/cat-digital.component';
import { InicioadminComponent } from './components/inicioadmin/inicioadmin.component';
import { InformesComponent } from './components/informes/informes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AltalibrosdigitalesComponent } from './components/altalibrosdigitales/altalibrosdigitales.component';
import { AltalibrosfisicosComponent } from './components/altalibrosfisicos/altalibrosfisicos.component';
import { BajalibrosdigitalesComponent } from './components/bajalibrosdigitales/bajalibrosdigitales.component';
import { BajalibrosfisicosComponent } from './components/bajalibrosfisicos/bajalibrosfisicos.component';


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
    path : 'catalogo/fisico',
    component : CatFisicoComponent
  },
  {
    path : 'catalogo/digital',
    component : CatDigitalComponent
  },
  {
    path : 'inicioadmin',
    component : InicioadminComponent
  },
  {
    path : 'informes',
    component : InformesComponent
  },
  {
    path : 'inventario',
    component : InventarioComponent
  },
  {
    path : 'bajadigital',
    component : BajalibrosdigitalesComponent
  },
  {
    path : 'bajafisica',
    component : BajalibrosfisicosComponent
  },
  {
    path : 'altadigital',
    component : AltalibrosdigitalesComponent
  },
  {
    path : 'altafisica',
    component : AltalibrosfisicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
