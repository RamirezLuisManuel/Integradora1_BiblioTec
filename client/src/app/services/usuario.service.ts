import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI = 'http://localhost:3000/api/usuario'; // Asegúrate de que el back-end esté corriendo en este puerto

  constructor(private http: HttpClient) {}

  login(Matricula: string, Contrasenia: string): Observable<any> {
    return this.http.post(`${this.API_URI}/login`, { Matricula, Contrasenia });
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.API_URI}`);
  }

  registerUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.API_URI}/`, usuario);
  }

}
