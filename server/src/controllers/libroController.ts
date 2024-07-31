import{Request, Response} from 'express';
import pool from '../database';

	class LibrosController{
		public list(req : Request, resp : Response){
			console.log(req.body);
			resp.json({text:'Listig books'});
		}
		public create (req:Request, resp:Response){
			resp.json({text : 'Creating a book’'});
		}
		public delete(req:Request, resp:Response){
			resp.json({text:'Deleting a book'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Updating a book'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'This is a book' + req.params.Id});
		}
	
	}
	

const librosController = new LibrosController();
export default librosController;
