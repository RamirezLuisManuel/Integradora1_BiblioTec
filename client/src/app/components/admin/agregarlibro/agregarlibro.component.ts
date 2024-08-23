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
    Isbn: '',
    Titulo: '',
    Autor: '',
    Genero: '',
    Descripcion: '',
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
      return;
    }

    this.booksService.saveBook(this.book).subscribe(
      res => {
        this.showSuccessMessage = true;
        this.showDuplicateIsbnMessage = false;
        setTimeout(() => this.showSuccessMessage = false, 5000); // Oculta el mensaje después de 5 segundos
      },
      err => {
        if (err.status === 409) { // Suponiendo que el backend devuelve un 409 Conflict para ISBN duplicado
          this.showDuplicateIsbnMessage = true;
        } else {
          console.error(err);
        }
      }
    );
  }

  onIsbnChange(event: any): void {
    let value = event.target.value.replace(/\s+/g, ''); // Elimina todos los espacios
    this.book.Isbn = value;
    event.target.value = value;
    this.validateIsbn(value);
  }

  validateIsbn(Isbn: string): void {
    const isbn10Pattern = /^\d{9}[\dX]$/;
    const isbn13Pattern = /^\d{13}$/;
    const isbnControl = this.isbnInput.nativeElement as HTMLInputElement;
  
    isbnControl.setCustomValidity('');
  
    if (!isbn10Pattern.test(Isbn) && !isbn13Pattern.test(Isbn)) {
      isbnControl.setCustomValidity('El ISBN debe ser un formato válido (ISBN-10 o ISBN-13).');
    }
  }

  onTituloChange(event: any): void {
    let value = event.target.value.trimStart().replace(/\s\s+/g, ' ');
    this.book.Titulo = value.charAt(0).toUpperCase() + value.slice(1);
    event.target.value = this.book.Titulo;
  }

  onAutorChange(event: any): void {
    let value = event.target.value.trimStart().replace(/\s\s+/g, ' ');
    this.book.Autor = value.charAt(0).toUpperCase() + value.slice(1);
    event.target.value = this.book.Autor;
  }

  onTemaChange(event: any): void {
    let value = event.target.value.trimStart().replace(/\s\s+/g, ' ');
    this.book.Genero = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    event.target.value = this.book.Genero;
    this.validateTema(value);
  }
  
  validateTema(Genero: string): void {
    const temaControl = this.temaInput.nativeElement as HTMLInputElement;
    temaControl.setCustomValidity('');
  
    const lettersOnly = Genero.replace(/[^a-zA-Z]/g, ''); // Elimina caracteres no alfabéticos
    if (lettersOnly.length < 5) {
      temaControl.setCustomValidity('El tema debe contener al menos 5 letras.');
    }
  }

  onDescripcionChange(event: any): void {
    let value = event.target.value.trimStart().replace(/\s\s+/g, ' ');
    this.book.Descripcion = value.charAt(0).toUpperCase() + value.slice(1);
    event.target.value = this.book.Descripcion;
    this.validateDescripcion(value);
  }
  
  validateDescripcion(Descripcion: string): void {
    const descripcionControl = this.descripcionInput.nativeElement as HTMLInputElement;
    descripcionControl.setCustomValidity('');

    // Contar palabras
    const wordCount = Descripcion.split(/\s+/).filter(word => word.trim().length > 0).length;

    // Validar si hay al menos 5 palabras
    if (wordCount < 5) {
      descripcionControl.setCustomValidity('La descripción debe contener al menos 5 palabras.');
    }
  }
}
