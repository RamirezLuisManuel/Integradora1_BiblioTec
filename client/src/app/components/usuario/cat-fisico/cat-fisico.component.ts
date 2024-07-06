import { Component, HostBinding } from '@angular/core';
import { BooksService } from '../../../services/books.service';


@Component({
  selector: 'app-cat-fisico',
  templateUrl: './cat-fisico.component.html',
  styleUrl: './cat-fisico.component.css'
})
export class CatFisicoComponent {

  @HostBinding('class') classes = 'row';

  books:any=[]

  constructor (private booksService : BooksService){}

  ngOnInit (){
    this.booksService.getBooks().subscribe(
      resp => {
        this.books=resp
      },
      err => console.log(err)
    );
  }

}
