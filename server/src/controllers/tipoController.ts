import{Request, Response} from 'express';
import pool from '../database';

	class TipoController{
		public async list(req:Request, resp:Response){
			const tipo = await pool.query('SELECT * FROM TipoUsuario');
			resp.json(tipo);
		}

		public async create(req: Request, resp: Response): Promise<void> {
			const { IdTipo, Descripcion } = req.body;
	
			// Validar si el IdTipo ya existe
			const existingTipo = await pool.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
			if (existingTipo.length > 0) {
				resp.status(400).json({ message: 'El IdTipo ya existe' });
				return;
			}
	
			// Insertar nuevo registro
			await pool.query('INSERT INTO TipoUsuario set ?', [req.body]);
			resp.json({ message: 'Tipo guardado' });
		}

		public async delete(req: Request, resp: Response) {
			const { IdTipo } = req.params;
		
			// Verificar si el IdTipo existe
			const existingTipo = await pool.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
			if (existingTipo.length === 0) {
				resp.status(404).json({ message: 'El tipo no existe' });
				return;
			}
		
			// Si existe, proceder a eliminarlo
			await pool.query('DELETE FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
			resp.json({ message: 'El tipo fue eliminado' });
		}
		
		public async update(req: Request, resp: Response): Promise<void> {
			try {
				const { IdTipo } = req.params;
				const { IdTipo: newIdTipo } = req.body; // El nuevo IdTipo que se desea actualizar
		
				// Verificar si el tipo de usuario con el IdTipo actual existe
				const existingTipo = await pool.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
				if (existingTipo.length === 0) {
					resp.status(404).json({ message: 'El tipo no existe' });
					return;
				}
		
				// Si el IdTipo ha cambiado, verificar que el nuevo IdTipo no exista ya en la base de datos
				if (newIdTipo && newIdTipo !== IdTipo) {
					const idExists = await pool.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [newIdTipo]);
					if (idExists.length > 0) {
						resp.status(400).json({ message: 'El nuevo IdTipo ya está en uso por otro tipo' });
						return;
					}
				}
		
				// Actualizar el tipo de usuario
				await pool.query('UPDATE TipoUsuario SET ? WHERE IdTipo = ?', [req.body, IdTipo]);
				resp.json({ message: 'El tipo fue actualizado' });
			} catch (error) {
				console.error('Error al actualizar el tipo:', error);
				resp.status(500).json({ message: 'Error interno del servidor' });
			}
		}
		

		public async getOne(req:Request, resp:Response){
			const {IdTipo} = req.params; //se recupera el id del request params.
			const tipo = await pool.query('SELECT * FROM TipoUsuario WHERE IdTipo=?',[IdTipo]);
			if(tipo.length > 0){
				return resp.json(tipo[0]);
			}
			resp.status(404).json({text: 'EL tipo no existe'});
		} 

	}

const tipoController = new TipoController();
export default tipoController;
