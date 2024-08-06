import { Router } from 'express';
import tipoController from '../controllers/libroController';

class TipousuarioRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/tipo',tipoController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/tipo ',tipoController.create);
        this.router.delete('/tipo/:Id',tipoController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/tipo/:Id',tipoController.update);
        this.router.get('/tipo/:Id',tipoController.getOne);
    }
}

const tipousuarioRoutes = new TipousuarioRoutes()
export default tipousuarioRoutes.router;