import{Request, Response} from 'express';
import pool from '../database';

	class PrestamoController{
		public async list(req:Request, resp:Response){
			const prestamo = await pool.query('SELECT * FROM Prestamos');
			resp.json(prestamo);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO Prestamos set ?',[req.body]);
			resp.json({message : 'Datos de prestamo guardados'});
		}
		public async delete(req:Request, resp:Response){
			const {Id} = req.params;
			await pool.query('DELETE FROM Prestamos WHERE Id=?',[Id]);
			resp.json({message: 'EL prestamo fue eliminado'});
		}
		public async update(req:Request, resp:Response){
			const {Id} = req.params;
			await pool.query('UPDATE Prestamos set ? WHERE Id = ?',[req.body,Id]);
			resp.json({message : 'EL prestamo fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {Id} = req.params; //se recupera el id del request params.
			const prestamo = await pool.query('SELECT * FROM Libros WHERE Id=?',[Id]);
			if(prestamo.length > 0){
				return resp.json(prestamo[0]);
			}
			resp.status(404).json({text: 'Datos del prestamo no existen'});
		} 
	}
	
const prestamoController = new PrestamoController();
export default prestamoController;