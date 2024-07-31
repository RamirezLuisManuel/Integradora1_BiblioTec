import { Component, HostBinding } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-agregarlibro',
  templateUrl: './agregarlibro.component.html',
  styleUrl: './agregarlibro.component.css'
})
export class AgregarlibroComponent {
  @HostBinding('class') classes='row';

  book : Book = {
    isbn:0,
    id: 0,
    title : '',
    author: '',
    genero: '',
    create_at : new Date(),
    tipo : '',
    disponibilidad:0,
    image : '',
    description:'',
  }; 
	constructor(private booksService : BooksService){}
  
	ngOnInit(){}

  saveNewBook(){
    delete this.book.create_at;
	  delete this.book.isbn; //elimina solo del objeto a enviar estos datos, ya que son generados por la base de datos directamente y no necesitan ser enviados.
    this.booksService.saveBook(this.book).subscribe(
      resp =>{console.log(resp)},
      err => console.log(err)
    );
  }

}
