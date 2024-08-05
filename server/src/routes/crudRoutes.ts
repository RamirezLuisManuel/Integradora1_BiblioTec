import { Router } from 'express';
import inventarioController from '../controllers/libroController';


class InventarioRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/crud/',inventarioController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/crud/',inventarioController.create);
        this.router.delete('/crud/:Id',inventarioController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/crud/:Id',inventarioController.update);
        this.router.get('/crud/:Id',inventarioController.getOne);
    }
}

const inventarioRoutes = new InventarioRoutes()
export default inventarioRoutes.router;