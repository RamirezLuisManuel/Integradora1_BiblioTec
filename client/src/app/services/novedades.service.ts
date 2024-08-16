import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Novedades } from '../models/Novedades';

@Injectable({
  providedIn : 'root'
})
export class NovedadesService {

  API_URI = `http://localhost:3000/api/novedades`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getNovedades(){
    return this.http.get(`${this.API_URI}`);
  }

  getNovedad(IdNovedad : Number){
    return this.http.get(`${this.API_URI}/${IdNovedad}`);
  }

  setNovedades(){}

  saveNovedad(novedades:Novedades){
		return this.http.post(`${this.API_URI}`,novedades);
}
  updateNovedad(IdNovedad: Number, updatedNovedad: Novedades){
    return this.http.put(`${this.API_URI}/${IdNovedad}`, updatedNovedad);
}
}