export interface Book{
    isbn?:String;
    id?:number;
    title?:string;
    author?:string;
    genero?:string;
    create_at?:Date;
    tipo?:string;
    disponibilidad?:number;
    image?:string;
    description?:string;
}//El signo de interrogación nos dice que el campo es opcional