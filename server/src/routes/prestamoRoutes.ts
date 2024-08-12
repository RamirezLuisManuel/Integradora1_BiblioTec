import { Router } from 'express';
import prestamoController from '../controllers/prestamoController';


class PrestamoRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',prestamoController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',prestamoController.create);
        this.router.delete('/:IdPrestamo',prestamoController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:IdPrestamo',prestamoController.update);
        this.router.get('/:IdPrestamo',prestamoController.getOne);
    }
}

const prestamoRoutes = new PrestamoRoutes()
export default prestamoRoutes.router;