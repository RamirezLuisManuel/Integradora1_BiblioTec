export interface Book{
    id?:number;
    title?:string;
    genero?:string;
    description?:string;
    pages?:number;
    author?:string;
    index?:string;
    image?:string;
    create_at?:Date;
}//El signo de interrogación nos dice que el campo es opcional