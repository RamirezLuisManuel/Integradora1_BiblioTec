import{Request, Response} from 'express';
import pool from '../database';

	class InventarioController{
		public list(req : Request, resp : Response){
			resp.json({text:'Inventario'});
		}
		public create(req : Request, resp : Response){
			console.log(req.body); 
			resp.json({text : 'Crear libro'});
		}	
		public delete(req:Request, resp:Response){
			resp.json({text:'Borrar libro'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Actualizar libro'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'Este es un libro' + req.params.Id});
		}
	
	}
	
const inventarioController = new InventarioController();
export default inventarioController;
