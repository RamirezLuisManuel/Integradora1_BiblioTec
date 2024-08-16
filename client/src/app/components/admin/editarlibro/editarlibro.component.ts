import { Component, HostBinding } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-editarlibro',
  templateUrl: './editarlibro.component.html',
  styleUrl: './editarlibro.component.css'
})
export class EditarlibroComponent {
  @HostBinding('class') classes='row';

  book : Book = {
    isbn:'',
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

  ngOnInit(){ }
  
  updateBook(){
    if (this.book.isbn) {
      this.booksService.updateBook(this.book.isbn, this.book).subscribe(
        resp => {
          console.log(resp);
        },
        err => console.log(err)
      );
    }
  }
}
