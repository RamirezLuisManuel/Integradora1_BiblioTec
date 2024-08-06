import{Request, Response} from 'express';
import pool from '../database';

	class InventarioController{
		public list(req : Request, resp : Response){
			console.log(req.body);
			resp.json({text:'Lista de inventario'});
		}
		public create (req:Request, resp:Response){
			resp.json({text : 'Creaando inventario'});
		}
		public delete(req:Request, resp:Response){
			resp.json({text:'Eliminando inventario'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Actualizando el inventario'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'Este es el inventario' + req.params.Id});
		}
	
	}
	

const inventarioController = new InventarioController();
export default inventarioController;