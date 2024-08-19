import { Component, OnInit, HostBinding } from '@angular/core';
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
    isbn:'',
    titulo:'',
    autor:'',
    tema:'',
    descripcion:'',
    disponibilidad:0,
    contenido:'',
    tipolibro:'',
    imagenlibro:'',
    fecharegistro: new Date()
  }; 
	constructor(private booksService : BooksService){}
  
	ngOnInit(){}

  saveNewBook() {
    this.booksService.saveBook(this.book).subscribe(
      res => {
        console.log('Libro guardado con éxito', res);
        // Lógica adicional después de guardar el libro, como redirigir a otra página o mostrar un mensaje de éxito.
      },
      err => console.error(err)
    );
  }

}
