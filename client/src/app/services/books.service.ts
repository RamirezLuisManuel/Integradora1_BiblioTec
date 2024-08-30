import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //interfaz que permite las peticiones 
import { Book } from '../models/Book';
import { Observable } from 'rxjs';



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

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_URI}/${isbn}`);
  }


  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`/api/books/${isbn}`);
  }

  setBooks(){}

  saveBook(bookData: FormData): Observable<any> {
    return this.http.post(this.API_URI, bookData);
  }
  
  updateBook(isbn: string, bookData: FormData): Observable<any> {
    return this.http.put(`${this.API_URI}/${isbn}`, bookData);
  }
  
  deleteBook(Isbn: String){
    return this.http.delete(`${this.API_URI}/${Isbn}`);
  }
}
