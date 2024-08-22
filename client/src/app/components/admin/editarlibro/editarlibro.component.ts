import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-editarlibro',
  templateUrl: './editarlibro.component.html',
  styleUrls: ['./editarlibro.component.css']
})
export class EditarlibroComponent implements OnInit {

  book: Book = {
    isbn: '',
    titulo: '',
    autor: '',
    tema: '',
    descripcion: '',
    disponibilidad: 0,
    contenido: '',
    tipolibro: '',
    imagenlibro: '',
    fecharegistro: new Date()
  };

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('Isbn');
    console.log('ISBN desde la URL:', isbn); // Agrega este log para depurar
  
    if (isbn) {
      this.booksService.getBook(isbn).subscribe(
        (response: Book) => {
          this.book = response;
        },
        err => console.error(err)
      );
    } else {
      console.error('El ISBN no está definido en la URL.');
    }
  }

  saveBook(): void {
    if (this.book.isbn) {
      this.booksService.updateBook(this.book.isbn, this.book).subscribe(
        res => {
          console.log('Libro actualizado con éxito', res);
          this.router.navigate(['/']); // Redirige a la página principal o a la vista de libros
        },
        err => console.error(err)
      );
    }
  }
}
