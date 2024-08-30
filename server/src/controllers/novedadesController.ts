import{Request, Response} from 'express';
import pool from '../database';

	class NovedadesController{
		public async list(req:Request, resp:Response){
			const novedades = await pool.query('SELECT * FROM Novedad');
			resp.json(novedades);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO Novedad set ?',[req.body]);
			resp.json({message : 'Novedad guardada'});
		}
		public async delete(req:Request, resp:Response){
			const {IdNovedad} = req.params;
			await pool.query('DELETE FROM Novedad WHERE IdNovedad=?',[IdNovedad]);
			resp.json({message: 'La novedad fue eliminado'});
		}
		public async update(req:Request, resp:Response){
			const {IdNovedad} = req.params;
			await pool.query('UPDATE Novedad set ? WHERE IdNovedad = ?',[req.body,IdNovedad]);
			resp.json({message : 'La novedad fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {IdNovedad} = req.params; //se recupera el id del request params.
			const novedades = await pool.query('SELECT * FROM Novedad WHERE IdNovedad=?',[IdNovedad]);
			if(novedades.length > 0){
				return resp.json(novedades[0]);
			}
			resp.status(404).json({text: 'La novedad no existe'});
		} 
	}
	
const novedadesController = new NovedadesController();
export default novedadesController;