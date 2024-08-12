import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes{
    public router : Router = Router();//Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){
        this.config();
    }
    config():void{
        //this.router.get('/',(req,resp)=>resp.send('Hello'));//Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.get('/',indexController.index);
    }
}

const indexRoutes = new IndexRoutes()
export default indexRoutes.router;