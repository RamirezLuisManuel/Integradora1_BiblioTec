import{Request, Response} from 'express';
import pool from '../database';

	class UsuarioController{
		public list(req : Request, resp : Response){
			console.log(req.body);
			resp.json({text:'Lista de usuarios'});
		}
		public create (req:Request, resp:Response){
			resp.json({text : 'Creación de un usuario’'});
		}
		public delete(req:Request, resp:Response){
			resp.json({text:'Eliminar un usuario'});
		}
		public update(req:Request, resp:Response){
			resp.json({text:'Actualizando un usuario'+req.params.Id});
		}
		public getOne(req : Request, resp: Response){
			resp.json({text : 'Este es el usuario' + req.params.Id});
		}
	
	}
	

const usuarioController = new UsuarioController();
export default usuarioController;