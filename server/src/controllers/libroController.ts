import{Request, Response} from 'express';
import pool from '../database';

	class LibrosController{
		public async list(req:Request, resp:Response){
			const libros = await pool.query('SELECT * FROM Libros');
			resp.json(libros);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO Libros set ?',[req.body]);
			resp.json({message : 'Libro guardado'});
		}
		public async delete(req:Request, resp:Response){
			const {Id} = req.params;
			await pool.query('DELETE FROM Libros WHERE Id=?',[Id]);
			resp.json({message: 'EL libro fue eliminado'});
		}
		public async update(req:Request, resp:Response){
			const {Id} = req.params;
			await pool.query('UPDATE Libros set ? WHERE Id = ?',[req.body,Id]);
			resp.json({message : 'EL libro fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {Id} = req.params; //se recupera el id del request params.
			const libros = await pool.query('SELECT * FROM Libros WHERE Id=?',[Id]);
			if(libros.length > 0){
				return resp.json(libros[0]);
			}
			resp.status(404).json({text: 'EL libro no existe'});
		} 
	}
	
const librosController = new LibrosController();
export default librosController;
