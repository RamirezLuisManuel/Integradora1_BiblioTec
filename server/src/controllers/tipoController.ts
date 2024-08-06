import{Request, Response} from 'express';
import pool from '../database';

	class TipoController{
		public list(req : Request, resp : Response){
			console.log(req.body);
			resp.json({text:'Listig type'});
		}
		public create (req:Request, resp:Response){
			resp.json({text : 'Creating a type'});
		}
		public delete(req:Request, resp:Response){
			resp.json({text:'Deleting a type'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Updating a type'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'This is a type' + req.params.Id});
		}
	
	}
	

const tipoController = new TipoController();
export default tipoController;