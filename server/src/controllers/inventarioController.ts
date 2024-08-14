import{Request, Response} from 'express';
import pool from '../database';

	class InventarioController{
		public async list(req:Request, resp:Response){
			const inventario = await pool.query('SELECT * FROM Inventario');
			resp.json(inventario);
		}
		public async create(req:Request,resp:Response):Promise<void>{
			await pool.query('INSERT INTO Inventario set ?',[req.body]);
			resp.json({message : 'Datos de inventario insertado'});
		}
		public async delete(req:Request, resp:Response){
			const {IdInventario} = req.params;
			await pool.query('DELETE FROM Inventario WHERE IdInventario=?',[IdInventario]);
			resp.json({message: 'Los datos del inventario fueron eliminados'});
		}
		public async update(req:Request, resp:Response){
			const {IdInventario} = req.params;
			await pool.query('UPDATE Inventario set ? WHERE IdInventario = ?',[req.body,IdInventario]);
			resp.json({message : 'EL inventario fue atualizado'});
		}
		public async getOne(req:Request, resp:Response){
			const {IdInventario} = req.params; //se recupera el id del request params.
			const inventario = await pool.query('SELECT * FROM Inventario WHERE IdInventario=?',[IdInventario]);
			if(inventario.length > 0){
				return resp.json(inventario[0]);
			}
			resp.status(404).json({text: 'EL libro no existe'});
		} 
	}
	
const inventarioController = new InventarioController();
export default inventarioController;