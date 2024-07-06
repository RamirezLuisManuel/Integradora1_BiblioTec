import { Component, HostBinding } from '@angular/core';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-cat-digital',
  templateUrl: './cat-digital.component.html',
  styleUrl: './cat-digital.component.css'
})
export class CatDigitalComponent {
  
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
