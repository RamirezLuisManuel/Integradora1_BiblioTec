export interface Book{
    isbn?:number;
    title?:string;
    author?:string;
    genero?:string;
    create_at?:Date;
    availability?:number;
    image?:string;
    description?:string;
}//El signo de interrogación nos dice que el campo es opcional