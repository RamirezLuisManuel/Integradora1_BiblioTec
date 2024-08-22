import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'; // Ajusta la ruta según tu estructura de proyecto
import { Usuario } from '../../../models/Usuario'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html', // Asegúrate de que esta ruta sea correcta
  styleUrls: ['./registro.component.css'] // Asegúrate de que esta ruta sea correcta
})
export class RegistroComponent {
  validDomains: string[] = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];

  constructor(private usuarioService: UsuarioService) {}

  async onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Limpiar mensajes de error
    this.clearErrors();

    // Validación de la matrícula
    const matricula = formData.get('Matricula') as string;
    if (!/^\d{10}$/.test(matricula)) {
      this.setError('matriculaError', 'La matrícula debe tener exactamente 10 dígitos y solo puede contener números.');
      return;
    }

    // Validación de Nombre(s)
    const nombre = formData.get('Nombre') as string;
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
      this.setError('nombreError', 'El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.');
      return;
    }

    // Validación de Apellido Paterno
    const apPaterno = formData.get('ApPaterno') as string;
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(apPaterno)) {
      this.setError('apPaternoError', 'El apellido paterno solo puede contener letras y espacios. No se permiten números ni caracteres especiales.');
      return;
    }

    // Validación de Apellido Materno
    const apMaterno = formData.get('ApMaterno') as string;
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(apMaterno)) {
      this.setError('apMaternoError', 'El apellido materno solo puede contener letras y espacios. No se permiten números ni caracteres especiales.');
      return;
    }

    // Validación de Correo Electrónico
    const correo = formData.get('Correo') as string;
    if (!this.isValidEmailDomain(correo)) {
      this.setError('correoError', 'El dominio del correo electrónico debe ser uno de los dominios válidos: ' + this.validDomains.join(', '));
      return;
    }

    const data: Usuario = {
      Matricula: matricula,
      Nombre: nombre,
      ApPaterno: apPaterno,
      ApMaterno: apMaterno,
      Direccion: formData.get('Direccion') as string,
      Correo: correo,
      Telefono: formData.get('Telefono') as string,
      IdTipo: 1, // Valor por defecto
      Contrasenia: formData.get('Contrasenia') as string,
      StaUsuario: 'Activo' // Valor por defecto
    };

    // Verificar los datos que se enviarán
    console.log('Datos enviados:', data);

    // Enviar datos al servidor
    try {
      const response = await this.usuarioService.registerUsuario(data).toPromise();
      alert('Usuario registrado exitosamente');
      window.location.href = '/inicio'; // Redirigir a la página de inicio
    } catch (error) {
      alert('Error al registrar el usuario');
      console.error('Error:', error);
    }
  }

  private isValidEmailDomain(email: string): boolean {
    const domain = email.split('@')[1];
    return this.validDomains.includes(domain);
  }

  private setError(elementId: string, message: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  private clearErrors() {
    const errorIds = ['matriculaError', 'nombreError', 'apPaternoError', 'apMaternoError', 'correoError'];
    errorIds.forEach(id => {
      const errorElement = document.getElementById(id);
      if (errorElement) {
        errorElement.textContent = '';
      }
    });
  }
}
