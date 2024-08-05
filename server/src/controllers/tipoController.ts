import{Request, Response} from 'express';
import pool from '../database';

	class TipoController{
		public list(req : Request, resp : Response){
			resp.json({text:'Lista de tipos'});
		}
		public create(req : Request, resp : Response){
			console.log(req.body); 
			resp.json({text : 'Crear tipo'});
		}	
		public delete(req:Request, resp:Response){
			resp.json({text:'Borrar tipo'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Actualizar tipo'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'Este es un tipo' + req.params.Id});
		}
	
	}
	
const tipoController = new TipoController();
export default tipoController;
