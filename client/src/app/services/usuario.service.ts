import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn : 'root'
})
export class UsuarioService {

  API_URI = `http://localhost:3000/api/usuarios`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getUsuarios(){
    return this.http.get(`${this.API_URI}`);
  }

  getUsuario(id : string){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  setUsuarios(){}

  saveUsuario(usuario:Usuario){
		return this.http.post(`${this.API_URI}`,usuario);
}
  updateUsuario(id: number, updatedUsuario: Usuario){
    return this.http.put(`${this.API_URI}/${id}`, updatedUsuario);
}
}