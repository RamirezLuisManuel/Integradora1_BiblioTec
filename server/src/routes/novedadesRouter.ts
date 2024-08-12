import { Router } from 'express';
import novedadesController from '../controllers/novedadesController';


class NovedadesRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',novedadesController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',novedadesController.create);
        this.router.delete('/:Id',novedadesController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:Id',novedadesController.update);
        this.router.get('/:Id',novedadesController.getOne);
    }
}

const novedadesRoutes = new NovedadesRoutes()
export default novedadesRoutes.router;