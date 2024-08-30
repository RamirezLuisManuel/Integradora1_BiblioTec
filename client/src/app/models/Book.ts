export interface Book{
    Isbn:string;
    Titulo?:string;
    Autor?:string;
    Genero?:string;
    Descripcion?:string;
    Imagen?:Blob | null; // Permitir nulo para casos sin imagen
}