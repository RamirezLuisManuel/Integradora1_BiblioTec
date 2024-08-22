import { Component, ViewChild, ElementRef } from '@angular/core';
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

  showSuccessMessage = false;
  showDuplicateIsbnMessage = false;

  @ViewChild('isbnInput', { static: false }) isbnInput!: ElementRef;
  @ViewChild('tituloInput', { static: false }) tituloInput!: ElementRef;
  @ViewChild('autorInput', { static: false }) autorInput!: ElementRef;
  @ViewChild('temaInput', { static: false }) temaInput!: ElementRef;
  @ViewChild('descripcionInput', { static: false }) descripcionInput!: ElementRef;
  @ViewChild('tipolibroInput', { static: false }) tipolibroInput!: ElementRef;
  @ViewChild('disponibilidadInput', { static: false }) disponibilidadInput!: ElementRef;

  constructor(private booksService: BooksService) {}

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

  onIsbnChange(event: any): void {
    let value = event.target.value;

    // Elimina todos los espacios
    value = value.replace(/\s+/g, '');

    // Actualiza el valor del campo de entrada
    this.book.isbn = value;
    event.target.value = value;

    // Aplicar validación personalizada
    this.validateIsbn(value);
  }

  validateIsbn(isbn: string): void {
    const isbn10Pattern = /^\d{9}[\dX]$/;
    const isbn13Pattern = /^\d{13}$/;
    const isbnControl = this.isbnInput.nativeElement as HTMLInputElement;
  
    isbnControl.setCustomValidity('');
  
    if (!isbn) {
      isbnControl.setCustomValidity('Este campo es obligatorio.');
    } else if (isbn.length < 10 || isbn.length > 13) {
      isbnControl.setCustomValidity('El ISBN debe tener entre 10 y 13 caracteres.');
    } else if (!isbn10Pattern.test(isbn) && !isbn13Pattern.test(isbn)) {
      isbnControl.setCustomValidity('El ISBN debe ser un formato válido (ISBN-10 o ISBN-13).');
    }
  
    isbnControl.reportValidity();
  }
  onTituloChange(event: any): void {
    let value = event.target.value;

    // Elimina espacios al inicio y espacios dobles
    value = value.trimStart().replace(/\s\s+/g, ' ');

    // Capitaliza la primera letra
    this.book.titulo = value.charAt(0).toUpperCase() + value.slice(1);

    // Actualiza el valor del campo de entrada
    event.target.value = this.book.titulo;
  }

  onAutorChange(event: any): void {
    let value = event.target.value;

    // Elimina espacios al inicio y espacios dobles
    value = value.trimStart().replace(/\s\s+/g, ' ');

    // Capitaliza la primera letra
    this.book.autor = value.charAt(0).toUpperCase() + value.slice(1);

    // Actualiza el valor del campo de entrada
    event.target.value = this.book.autor;
  }

  onTemaChange(event: any): void {
    let value = event.target.value;
  
    // Elimina espacios al inicio, al final y espacios dobles
    value = value.trim().replace(/\s\s+/g, ' ');
  
    // Capitaliza la primera letra
    this.book.tema = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  
    // Actualiza el valor del campo de entrada
    event.target.value = this.book.tema;
  
    // Aplicar validación personalizada
    this.validateTema(value);
  }
  
  validateTema(tema: string): void {
    const temaControl = this.temaInput.nativeElement as HTMLInputElement;
  
    // Borra cualquier error previo
    temaControl.setCustomValidity('');
  
    // Verifica que el campo contenga al menos 5 letras alfabéticas
    const lettersOnly = tema.replace(/[^a-zA-Z]/g, ''); // Elimina caracteres no alfabéticos
    if (lettersOnly.length < 5) {
      // Si hay menos de 5 letras alfabéticas, establece un error personalizado
      temaControl.setCustomValidity('El tema debe contener al menos 5 letras.');
    }
  
    // Marca el campo como inválido si no cumple con las validaciones
    temaControl.reportValidity();
  }
  
  
  onDescripcionChange(event: any): void {
    let value = event.target.value;

    // Elimina espacios al inicio y espacios dobles
    value = value.trimStart().replace(/\s\s+/g, ' ');

    // Capitaliza la primera letra
    this.book.descripcion = value.charAt(0).toUpperCase() + value.slice(1);

    // Actualiza el valor del campo de entrada
    event.target.value = this.book.descripcion;
  }
}
