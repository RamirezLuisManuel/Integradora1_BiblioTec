import { Component, HostBinding } from '@angular/core';
import { TipoService } from '../../../services/tipo.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  @HostBinding('class') classes = 'row';

  tipo:any=[]

  constructor (private tipoService : TipoService){}

  ngOnInit (){
    this.tipoService.getTipos().subscribe(
      resp => {
        this.tipo=resp
      },
      err => console.log(err)
    );
  }

}
