export interface Book{
    isbn:String;
    titulo?:string;
    autor?:string;
    tema?:string;
    descripcion?:string;
    disponibilidad?:number;
    contenido?:string 
    tipolibro?:string;
    imagenlibro?:string;
    fecharegistro?:Date;
}//El signo de interrogación nos dice que el campo es opcional