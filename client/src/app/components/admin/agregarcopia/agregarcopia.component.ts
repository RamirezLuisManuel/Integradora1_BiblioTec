import { Component } from '@angular/core';
import { Inventario } from '../../../models/Inventario';
import { InventarioService } from '../../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregarcopia',
  templateUrl: './agregarcopia.component.html',
  styleUrls: ['./agregarcopia.component.css']
})
export class AgregarcopiaComponent {

  inventario: Inventario = {
    CodLibro: '',
    Isbn: '',
    Formato: '',
    FechaRegistro: '',
    Estado: ''
  };

  showSuccessMessage = false;
  showDuplicateIdMessage = false;

  constructor(
    private inventarioService: InventarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Ejemplo: Obtener ISBN de la ruta actual
    this.route.params.subscribe(params => {
      this.inventario.Isbn = params['isbn'] || ''; // Suponiendo que el ISBN está en la ruta
    });

    // O si el ISBN viene de un servicio, podrías hacer algo como:
    // this.inventarioService.getIsbn().subscribe(isbn => this.inventario.Isbn = isbn);
  }

  saveNewInventario(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.inventarioService.saveInventario(this.inventario).subscribe(
      res => {
        this.showSuccessMessage = true;
        this.showDuplicateIdMessage = false;

        form.resetForm(); // Reinicia el formulario después de guardar
        setTimeout(() => this.showSuccessMessage = false, 5000); // Oculta el mensaje después de 5 segundos
      },
      err => {
        if (err.status === 409) {
          this.showDuplicateIdMessage = true;
        } else {
          console.error(err);
        }
      }
    );
  }
}
