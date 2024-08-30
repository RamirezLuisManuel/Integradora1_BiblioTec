import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventarioService } from '../../../services/inventario.service';
import { Inventario } from '../../../models/Inventario';

@Component({
  selector: 'app-copialibro',
  templateUrl: './copialibro.component.html',
  styleUrl: './copialibro.component.css'
})
export class CopialibroComponent {

  
  @HostBinding('class') classes = 'row';

  inventario: any=[] = [];
  inventarioToDelete: string = '';
  isbn: string = '';
  copias: any[] = [];

  constructor (
    private inventarioService : InventarioService,
    private route: ActivatedRoute,
    private copiasService: InventarioService
  ){}

  ngOnInit(): void {
    // Obtener el ISBN de la ruta
    this.route.params.subscribe(params => {
      this.isbn = params['isbn'];
      this.loadCopias(); // Cargar las copias basadas en el ISBN
    });
  }

  loadCopias(): void {
    this.inventarioService.getCopiasPorIsbn(this.isbn).subscribe(
      (data: Inventario[]) => {
        this.inventario = data;
      },
      error => {
        console.error('Error al obtener las copias', error);
      }
    );
  }

  prepareDelete(CodLibro: string) {
    this.inventarioToDelete = CodLibro;
  }

  deleteInventario (){
    this.inventarioService.deleteInventario(this.inventarioToDelete).subscribe(
      res => {
        console.log('Libro eliminado con éxito', res);
        this.inventario = this.inventario.filter((book: any) => book.Isbn !== this.inventarioToDelete); // Actualiza la lista de libros
      },
      err => console.error(err)
    );
  }

}
