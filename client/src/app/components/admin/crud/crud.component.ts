import { Component, HostBinding } from '@angular/core';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

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
