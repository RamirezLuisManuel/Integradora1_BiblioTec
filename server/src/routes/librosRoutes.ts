import { Router } from 'express';
import libroController from '../controllers/libroController';

class LibrosRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/libro/',libroController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/libro/',libroController.create);
        this.router.delete('/libro/:Id',libroController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/libro/:Id',libroController.update);
        this.router.get('/libro/:Id',libroController.getOne);
    }
}

const librosRoutes = new LibrosRoutes()
export default librosRoutes.router;