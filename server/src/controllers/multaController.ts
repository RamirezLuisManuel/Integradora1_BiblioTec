import{Request, Response} from 'express';
import pool from '../database';

	class MultaController{
		public list(req : Request, resp : Response){
			console.log(req.body);
			resp.json({text:'Lista de multas'});
		}
		public create (req:Request, resp:Response){
			resp.json({text : 'Creación de multa'});
		}
		public delete(req:Request, resp:Response){
			resp.json({text:'Eliminar una multa'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Actualizar una multa'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'Esta es la multa' + req.params.Id});
		}
	
	}
	

const multaController = new MultaController();
export default multaController;