import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasenia: string = '';
  errorMessage: string = '';  // Campo para el mensaje de error

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.errorMessage = ''; // Limpiar mensaje de error antes de la autenticación

    this.usuarioService.login(this.usuario, this.contrasenia).subscribe(response => {
      if (response.success) {
        // Redirigir según el tipo de usuario
        if (response.IdTipo === 2) {
          this.router.navigate(['/inicioadmin']);
        } else {
          this.router.navigate(['/inicio']);
        }
      } else {
        this.errorMessage = response.message || 'Usuario o contraseña incorrectos';
      }
    }, error => {
      this.errorMessage = 'Usuario o contraseña incorrecto';
    });
  }
}
