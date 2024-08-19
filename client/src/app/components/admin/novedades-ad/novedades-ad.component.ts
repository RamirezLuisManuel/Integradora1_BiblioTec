import { Component, HostBinding } from '@angular/core';
import { NovedadesService } from '../../../services/novedades.service';

@Component({
  selector: 'app-novedades-ad',
  templateUrl: './novedades-ad.component.html',
  styleUrl: './novedades-ad.component.css'
})
export class NovedadesAdComponent {

  @HostBinding('class') classes = 'row';

  novedades:any=[]

  constructor (private novedadesService : NovedadesService){}

  ngOnInit (){
    this.novedadesService.getNovedades().subscribe(
      resp => {
        this.novedades=resp
      },
      err => console.log(err)
    );
  }
}
