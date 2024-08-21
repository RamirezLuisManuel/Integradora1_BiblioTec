import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Book } from '../models/Book';

@Injectable({
  providedIn : 'root'
})
export class BooksService {

  API_URI = `http://localhost:3000/api/libros`;   //Back-end
  //API_URI = `http://localhost:3000/books`;    //Front-end con acceso a datos json.

  constructor(private http : HttpClient){}

  getBooks(){
    return this.http.get(`${this.API_URI}`);
  }

  getBook(Isbn : string){
    return this.http.get(`${this.API_URI}/${Isbn}`);
  }

  setBooks(){}

  saveBook(book:Book){
		return this.http.post(`${this.API_URI}`,book);
}
  updateBook(Isbn: String, updatedBook: Book){
    return this.http.put(`${this.API_URI}/${Isbn}`, updatedBook);
}
  deleteBook(Isbn: String){
    return this.http.delete(`${this.API_URI}/${Isbn}`);
  }
}
