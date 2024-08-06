import{Request, Response} from 'express';
import pool from '../database';

	class TipoController{
		public async list(req:Request, resp:Response){
			const tipoU = await pool.query('SELECT * FROM TipoUsuario');
			resp.json(tipoU);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO TipoUsuario set ?',[req.body]);
			resp.json({message : 'Tipo guardado'});
		}
		public async delete(req:Request, resp:Response){
			const {IdTipo} = req.params;
			await pool.query('DELETE FROM TipoUsuario WHERE IdTipo=?',[IdTipo]);
			resp.json({message: 'EL tipo fue eliminado'});
		}
		public async update(req:Request, resp:Response){
			const {IdTipo} = req.params;
			await pool.query('UPDATE TipoUsuario set ? WHERE IdTipo = ?',[req.body,IdTipo]);
			resp.json({message : 'EL tipo fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {IdTipo} = req.params; //se recupera el id del request params.
			const libros = await pool.query('SELECT * FROM TipoUsuario WHERE IdTipo=?',[IdTipo]);
			if(libros.length > 0){
				return resp.json(libros[0]);
			}
			resp.status(404).json({text: 'EL tipo no existe'});
		}
	
	}
	
const tipoController = new TipoController();
export default tipoController;
