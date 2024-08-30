import { Component, OnInit } from '@angular/core';
import { NovedadesService } from '../../../services/novedades.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {
  novedades: any[] = [];

  constructor(private novedadesService: NovedadesService) { }

  ngOnInit(): void {
    this.getNovedades();
  }

  getNovedades(): void {
    this.novedadesService.getNovedades().subscribe(
      (data: any[]) => {
        this.novedades = data;
      },
      err => console.error(err)
    );
  }
}
