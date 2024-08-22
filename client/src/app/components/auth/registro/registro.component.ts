import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'; // Ajusta la ruta según tu estructura de proyecto
import { Usuario } from '../../../models/Usuario'; // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html', // Asegúrate de que esta ruta sea correcta
  styleUrls: ['./registro.component.css'] // Asegúrate de que esta ruta sea correcta
})
export class RegistroComponent {
  constructor(private usuarioService: UsuarioService) {}

  async onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validación de la matrícula
    const matricula = formData.get('Matricula') as string;
    if (!/^\d{10}$/.test(matricula)) {
      alert('La matrícula debe tener exactamente 10 dígitos y solo puede contener números.');
      return;
    }

    // Validación de Nombre(s)
    const nombre = formData.get('Nombre') as string;
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
      alert('El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.');
      return;
    }

    const data: Usuario = {
      Matricula: matricula,
      Nombre: nombre,
      ApPaterno: formData.get('ApPaterno') as string,
      ApMaterno: formData.get('ApMaterno') as string,
      Direccion: formData.get('Direccion') as string,
      Correo: formData.get('Correo') as string,
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
}
