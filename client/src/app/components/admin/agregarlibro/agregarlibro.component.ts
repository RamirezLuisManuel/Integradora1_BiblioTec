import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-agregarlibro',
  templateUrl: './agregarlibro.component.html',
  styleUrls: ['./agregarlibro.component.css']
})
export class AgregarlibroComponent {
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

  constructor(private booksService: BooksService) {}

  showSuccessMessage = false;
  showDuplicateIsbnMessage = false;

saveNewBook(form: NgForm) {
  if (form.invalid) {
    form.control.markAllAsTouched();
    document.querySelector('form')?.classList.add('was-validated');
    return;
  }

  this.booksService.saveBook(this.book).subscribe(
    res => {
      console.log('Libro guardado con éxito', res);
      this.showSuccessMessage = true;
      this.showDuplicateIsbnMessage = false;
      setTimeout(() => this.showSuccessMessage = false, 5000); // Oculta el mensaje después de 5 segundos
    },
    err => {
      if (err.status === 500) { // Suponiendo que el backend devuelve un 409 Conflict para ISBN duplicado
        this.showDuplicateIsbnMessage = true;
      } else {
        console.error(err);
      }
    }
  );
}


}
