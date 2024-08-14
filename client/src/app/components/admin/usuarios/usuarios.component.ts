import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = []; // Cambia 'any' por el tipo de datos adecuado si tienes un modelo definido.

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data: any[]) => {
        this.usuarios = data;
      },
      error => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }
}
