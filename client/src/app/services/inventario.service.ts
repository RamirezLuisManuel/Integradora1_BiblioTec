import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Inventario } from '../models/Inventario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class InventarioService {

  API_URI = `http://localhost:3000/api/inventario`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getInventario(){
    return this.http.get(`${this.API_URI}`);
  }

  getInventarios(CodLibro : string){
    return this.http.get(`${this.API_URI}/${CodLibro}`);
  }

  setInventario(){}

  saveInventario(inventario:Inventario){
		return this.http.post(`${this.API_URI}`,inventario);
}
  updateInventario(CodLibro: String, updatedInventario: Inventario){
    return this.http.put(`${this.API_URI}/${CodLibro}`, updatedInventario);
}
deleteInventario(CodLibro: String){
  return this.http.delete(`${this.API_URI}/${CodLibro}`);
}
getByIsbn(isbn: string): Observable<any> {
  return this.http.get<any>(`${this.API_URI}/copias?isbn=${isbn}`);
}
getCopiasPorIsbn(isbn: string): Observable<Inventario[]> {
  return this.http.get<Inventario[]>(`${this.API_URI}/inventario/${isbn}`);
}
}