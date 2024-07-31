import { Component, OnInit, HostBinding } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-altalibros',
  templateUrl: './altalibrosfisicos.component.html',
  styleUrl: './altalibrosfisicos.component.css'
})
export class AltalibrosfisicosComponent {
  @HostBinding('class') classes='row';

  book : Book = {
    id : 0,
    title :'',
    genero : '',
    description : '',
    pages : 0,
    author : '',
    index : '',
    image : '',
    create_at : new Date()
  }
	constructor(private booksService : BooksService){}
	ngOnInit(){}

  saveNewBook(){
    this.booksService.saveBook(this.book).subscribe(
			resp =>{console.log(resp)},
			err => console.log(err)
		)
  }
}
