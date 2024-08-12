import{Request, Response} from 'express';
import pool from '../database';

	class MultaController{
		public async list(req:Request, resp:Response){
			const multa = await pool.query('SELECT * FROM Multa');
			resp.json(multa);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO Multa set ?',[req.body]);
			resp.json({message : 'Datos de la multa guardados'});
		}
		public async delete(req:Request, resp:Response){
			const {IdMulta} = req.params;
			await pool.query('DELETE FROM Multa WHERE IdMulta=?',[IdMulta]);
			resp.json({message: 'Datos de la multa eliminados'});
		}
		public async update(req:Request, resp:Response){
			const {IdMulta} = req.params;
			await pool.query('UPDATE Multa set ? WHERE IdMulta = ?',[req.body,IdMulta]);
			resp.json({message : 'La multa fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {IdMulta} = req.params; //se recupera el id del request params.
			const multa = await pool.query('SELECT * FROM Multa WHERE IdMulta=?',[IdMulta]);
			if(multa.length > 0){
				return resp.json(multa[0]);
			}
			resp.status(404).json({text: 'La multa no existe'});
		} 
	}
	
const multaController = new MultaController();
export default multaController;