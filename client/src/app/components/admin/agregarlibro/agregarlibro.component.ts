import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregarlibro',
  templateUrl: './agregarlibro.component.html',
  styleUrls: ['./agregarlibro.component.css']
})
export class AgregarlibroComponent implements OnInit {
  book: Book = {
    Isbn: '',
    Titulo: '',
    Autor: '',
    Genero: '',
    Descripcion: '',
    Imagen: null
  };

  isEditMode = false;
  showSuccessMessage = false;
  showDuplicateIsbnMessage = false;

  selectedFile: File | null = null; // Nueva propiedad para el archivo
  imageError: string | null = null; // Mensaje de error para imagen

  @ViewChild('isbnInput', { static: false }) isbnInput!: ElementRef;
  @ViewChild('tituloInput', { static: false }) tituloInput!: ElementRef;
  @ViewChild('autorInput', { static: false }) autorInput!: ElementRef;
  @ViewChild('temaInput', { static: false }) temaInput!: ElementRef;
  @ViewChild('descripcionInput', { static: false }) descripcionInput!: ElementRef;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.isEditMode = true;
      this.booksService.getBook(isbn).subscribe(
        (book) => {
          this.book = book;
        },
        (error) => {
          console.error('Error fetching book details', error);
        }
      );
    } else {
      this.isEditMode = false;
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) { // Ejemplo de límite de tamaño: 5MB
        this.imageError = 'El archivo debe ser menor de 5MB.';
        return;
      }
      this.selectedFile = file;
      this.imageError = null;
    }
  }

  saveBook(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

  const formData = new FormData();
  formData.append('isbn', this.book.Isbn);

  if (this.book.Titulo) {
    formData.append('titulo', this.book.Titulo);
  }

  if (this.book.Autor) {
    formData.append('autor', this.book.Autor);
  }

  if (this.book.Genero) {
    formData.append('genero', this.book.Genero);
  }

  if (this.book.Descripcion) {
    formData.append('descripcion', this.book.Descripcion);
  }
  
    if (this.isEditMode) {
      this.booksService.updateBook(this.book.Isbn, formData).subscribe(
        res => {
          this.showSuccessMessage = true;
          this.showDuplicateIsbnMessage = false;
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['/crud']); // Redirigir a la lista de libros
          }, 5000);
        },
        err => {
          if (err.status === 409) { // Suponiendo que el backend devuelve un 409 Conflict para ISBN duplicado
            this.showDuplicateIsbnMessage = true;
          } else {
            console.error(err);
          }
        }
      );
    } else {
      this.booksService.saveBook(formData).subscribe(
        res => {
          this.showSuccessMessage = true;
          this.showDuplicateIsbnMessage = false;
          setTimeout(() => this.showSuccessMessage = false, 5000);
        },
        err => {
          if (err.status === 409) {
            this.showDuplicateIsbnMessage = true;
          } else {
            console.error(err);
          }
        }
      );
    }
  }

  onIsbnChange(event: any): void {
    let value = event.target.value.replace(/\s+/g, '');
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

  onTituloChange(value: string): void {
    // Elimina espacios adicionales y convierte a minúsculas
    let formattedValue = value
      .trim() // Elimina espacios al inicio y al final
      .replace(/\s\s+/g, ' ') // Reemplaza múltiples espacios con un solo espacio
      .toLowerCase(); // Convierte todo a minúsculas
  
    // Convierte solo la primera letra en mayúscula
    if (formattedValue) {
      formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
    }
  
    // Actualiza el modelo y el valor del input
    this.book.Titulo = formattedValue;
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

    const lettersOnly = Genero.replace(/[^a-zA-Z]/g, '');
    if (lettersOnly.length < 5) {
      temaControl.setCustomValidity('El tema debe contener al menos 5 letras.');
    }
  }

  onDescripcionChange(event: any): void {
    let value = event.target.value.trimStart().replace(/\s\s+/g, ' ');
    this.book.Descripcion = value;
    event.target.value = this.book.Descripcion;
  }
}
