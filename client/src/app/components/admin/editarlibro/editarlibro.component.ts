import { Component, HostBinding } from '@angular/core';
import { Book } from '../../../models/Book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-editarlibro',
  templateUrl: './editarlibro.component.html',
  styleUrl: './editarlibro.component.css'
})
export class EditarlibroComponent {
  @HostBinding('class') classes='row';

  book : Book = {
    id:0,
    title : '',
    genero: '',
    author: '',
    image : '',
    create_at : new Date()
  };
  constructor(private booksService : BooksService){}

  ngOnInit(){ }
  
  updateBook(){
    if (this.book.id) {
      this.booksService.updateBook(this.book.id, this.book).subscribe(
        resp => {
          console.log(resp);
        },
        err => console.log(err)
      );
    }
  }
}
