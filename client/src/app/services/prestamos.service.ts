import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Prestamos } from '../models/Prestamos';

@Injectable({
  providedIn : 'root'
})
export class PrestamosService {

  API_URI = `http://localhost:3000/api/prestamos`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getPrestamos(){
    return this.http.get(`${this.API_URI}`);
  }

  getPrestamo(IdPrestamo : Number){
    return this.http.get(`${this.API_URI}/${IdPrestamo}`);
  }

  setPrestamos(){}

  savePrestamo(prestamos:Prestamos){
		return this.http.post(`${this.API_URI}`,prestamos);
}
  updatePrestamo(IdPrestamo: Number, updatedPrestamo: Prestamos){
    return this.http.put(`${this.API_URI}/${IdPrestamo}`, updatedPrestamo);
}
}