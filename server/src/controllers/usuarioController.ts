import{Request, Response} from 'express';
import pool from '../database';

	class UsuarioController{
		public async list(req:Request, resp:Response){
			const usuarios = await pool.query('SELECT * FROM Usuarios');
			resp.json(usuarios);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO Usuarios set ?',[req.body]);
			resp.json({message : 'Usuario guardado'});
		}
		public async delete(req:Request, resp:Response){
			const {Id} = req.params;
			await pool.query('DELETE FROM Usuarios WHERE Id=?',[Id]);
			resp.json({message: 'EL usuario fue eliminado'});
		}
		public async update(req:Request, resp:Response){
			const {Id} = req.params;
			await pool.query('UPDATE Usuarios set ? WHERE Id = ?',[req.body,Id]);
			resp.json({message : 'EL usuario fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {Id} = req.params; //se recupera el id del request params.
			const usuarios = await pool.query('SELECT * FROM Usuarios WHERE Id=?',[Id]);
			if(usuarios.length > 0){
				return resp.json(usuarios[0]);
			}
			resp.status(404).json({text: 'EL usuario no existe'});
		} 
	}
	
const usuarioController = new UsuarioController();
export default usuarioController;