import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Multa } from '../models/Multa';

@Injectable({
  providedIn : 'root'
})
export class MultaService {

  API_URI = `http://localhost:3000/api/multa`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getMultas(){
    return this.http.get(`${this.API_URI}`);
  }

  getMulta(IdMulta : Number){
    return this.http.get(`${this.API_URI}/${IdMulta}`);
  }

  setMulta(){}

  savePrestamo(multa:Multa){
		return this.http.post(`${this.API_URI}`,multa);
}
  updateMulta(IdMulta: Number, updatedMulta: Multa){
    return this.http.put(`${this.API_URI}/${IdMulta}`, updatedMulta);
}
}