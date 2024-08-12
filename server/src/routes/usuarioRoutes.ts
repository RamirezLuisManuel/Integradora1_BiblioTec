import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';

class UsuarioRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',usuarioController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',usuarioController.create);
        this.router.delete('/:Id',usuarioController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:Id',usuarioController.update);
        this.router.get('/:Id',usuarioController.getOne);
    }
}

const usuarioRoutes = new UsuarioRoutes()
export default usuarioRoutes.router;