import { Component, HostBinding } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  @HostBinding('class') classes = 'row';

  books: any=[] = [];
  bookToDelete: string = '';

  constructor (private booksService : BooksService){}

  ngOnInit (){
    this.booksService.getBooks().subscribe(
      resp => {
        this.books=resp
      },
      err => console.log(err)
    );
  }

  prepareDelete(Isbn: string) {
    this.bookToDelete = Isbn;
  }

  deleteBook (){
    this.booksService.deleteBook(this.bookToDelete).subscribe(
      res => {
        console.log('Libro eliminado con éxito', res);
        this.books = this.books.filter((book: any) => book.Isbn !== this.bookToDelete); // Actualiza la lista de libros
      },
      err => console.error(err)
    );
  }
}
