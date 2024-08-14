import { Router } from 'express';
import libroController from '../controllers/libroController';

class LibrosRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',libroController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',libroController.create);
        this.router.delete('/:Isbn',libroController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:Isbn',libroController.update);
        this.router.get('/:Isbn',libroController.getOne);
    }
}

const librosRoutes = new LibrosRoutes()
export default librosRoutes.router;