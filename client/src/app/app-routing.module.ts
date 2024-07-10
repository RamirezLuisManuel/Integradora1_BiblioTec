import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/usuario/inicio/inicio.component'; 
import { NovedadesComponent } from './components/usuario/novedades/novedades.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RecuperarComponent } from './components/auth/recuperar/recuperar.component';
import { VerificacionComponent } from './components/auth/verificacion/verificacion.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { CatFisicoComponent } from './components/usuario/cat-fisico/cat-fisico.component';
import { CatDigitalComponent } from './components/usuario/cat-digital/cat-digital.component';
import { InicioadminComponent } from './components/admin/inicioadmin/inicioadmin.component';
import { CrudComponent } from './components/admin/crud/crud.component';

import { AgregarlibroComponent } from './components/admin/agregarlibro/agregarlibro.component';
import { EditarlibroComponent } from './components/admin/editarlibro/editarlibro.component';
import { EliminarlibroComponent } from './components/admin/eliminarlibro/eliminarlibro.component';
import { EstatusComponent } from './components/usuario/estatus/estatus.component';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { PrestamosComponent } from './components/admin/prestamos/prestamos.component';


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
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'agregarlibro',
    component: AgregarlibroComponent
  },
  {
    path: 'editarlibro',
    component: EditarlibroComponent
  },
  {
    path: 'eliminalibro',
    component: EliminarlibroComponent
  },
  {
    path: 'estatus',
    component: EstatusComponent
  },
  {
    path: 'prestamos',
    component: PrestamosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
