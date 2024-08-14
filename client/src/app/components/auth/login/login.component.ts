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

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.login(this.usuario, this.contrasenia).subscribe(response => {
      if (response.success) {
        // Guardar el token u otros datos de autenticación si es necesario
        this.router.navigate(['/inicio']);
      } else {
        alert(response.message || 'Usuario o contraseña incorrectos');
      }
    }, error => {
      alert('Error en la autenticación');
    });
  }
}
