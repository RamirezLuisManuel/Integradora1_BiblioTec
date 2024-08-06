import{Request, Response} from 'express';
import pool from '../database';

	class PrestamoController{
		public list(req : Request, resp : Response){
			console.log(req.body);
			resp.json({text:'Lista de prestamos'});
		}
		public create (req:Request, resp:Response){
			resp.json({text : 'Creación de un prestamo'});
		}
		public delete(req:Request, resp:Response){
			resp.json({text:'Eliminar un prestamo'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Actualizando un prestamo'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'Este es el prestamo' + req.params.Id});
		}
	
	}
	

const prestamoController = new PrestamoController();
export default prestamoController;