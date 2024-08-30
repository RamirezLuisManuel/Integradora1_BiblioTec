import { Router } from 'express';
import inventarioController from '../controllers/inventarioController';


class InventarioRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/copias', inventarioController.getByIsbn); // Nueva ruta para obtener copias por ISBN
        this.router.get('/',inventarioController.list);//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/',inventarioController.create);
        this.router.delete('/:CodLibro',inventarioController.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:CodLibro',inventarioController.update);
        this.router.get('/:CodLibro',inventarioController.getOne);  
    }
}

const inventarioRoutes = new InventarioRoutes()
export default inventarioRoutes.router;