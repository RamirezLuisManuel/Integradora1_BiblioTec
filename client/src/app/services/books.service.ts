import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //API_URI = `http://localhost:3000/api`;   //Back-end
  API_URI = `http://localhost:3000/games`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getBooks(){
    return this.http.get(`${this.API_URI}`);
   
  }
}
