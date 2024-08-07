import { Router } from 'express';
import multaController from '../controllers/multaController';

class MultaRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',multaController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',multaController.create);
        this.router.delete('/:Id',multaController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:Id',multaController.update);
        this.router.get('/:Id',multaController.getOne);
    }
}

const multaRoutes = new MultaRoutes()
export default multaRoutes.router;