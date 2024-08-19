import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { TipoUsuario } from '../models/Tipo';

@Injectable({
  providedIn : 'root'
})
export class TipoService {

  API_URI = `http://localhost:3000/api/tipo`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getTipos(){
    return this.http.get(`${this.API_URI}`);
  }

  getTipo(Isbn : string){
    return this.http.get(`${this.API_URI}/${Isbn}`);
  }

  setTipo(){}

  saveTipo(tipo:TipoUsuario){
		return this.http.post(`${this.API_URI}`,tipo);
}
  updateTipo(IdTipo: Number, updatedTipo: TipoUsuario){
    return this.http.put(`${this.API_URI}/${IdTipo}`, updatedTipo);
}
}