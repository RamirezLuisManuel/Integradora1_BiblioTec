import{Request, Response} from 'express';
import pool from '../database';

	class LibrosController{
		public async list(req:Request, resp:Response){
			const libros = await pool.query('SELECT * FROM Libros');
			resp.json(libros);
		}
		
		public async create(req: Request, resp: Response): Promise<void> {
			try {
				const { Id } = req.body;
				
				// Verificar si el ID ya existe en la base de datos
				const existingBook = await pool.query('SELECT * FROM Libros WHERE Id = ?', [Id]);
				
				if (existingBook.length > 0) {
					resp.status(400).json({ message: 'El ID ya existe. No se puede duplicar.' });
					return;
				}
	
				// Si no existe, proceder a insertar el nuevo libro
				await pool.query('INSERT INTO Libros SET ?', [req.body]);
				resp.json({ message: 'Libro guardado' });
			} catch (error) {
				console.error('Error al crear el libro:', error);
				resp.status(500).json({ message: 'Error interno del servidor' });
			}
		}		

		public async delete(req: Request, resp: Response) {
			try{
				const { Id } = req.params;
				const libro = await pool.query('SELECT * FROM Libros WHERE Id = ?', [Id]);
				if (libro.length > 0) {
					await pool.query('DELETE FROM Libros WHERE Id = ?', [Id]);
					resp.json({ message: 'El libro fue eliminado' });
				} else {
					resp.status(404).json({ text: 'El libro no existe' });
				}
			} catch (error){
				console.error('Error al eliminar el libro:', error);
				resp.status(500).json({ message: 'Error interno del servidor' });
			}
		}
		
		public async update(req: Request, resp: Response): Promise<void> {
			try {
				const { Id } = req.params;
				const libro = await pool.query('SELECT * FROM Libros WHERE Id = ?', [Id]);
				if (libro.length > 0) {
					await pool.query('UPDATE Libros set ? WHERE Id = ?', [req.body, Id]);
					resp.json({ message: 'El libro fue actualizado' });
				} else {
					resp.status(404).json({ text: 'El libro no existe' });
				}
			} catch (error) {
				console.error('Error al actualizar el libro:', error);
				resp.status(500).json({ message: 'Error interno del servidor' });
			}
		}
		
		
		public async getOne(req: Request, resp: Response): Promise<void> {
			try{
				const { Id } = req.params; // Se recupera el ISBN de los parámetros de la solicitud.
			
				// Ejecuta la consulta en la base de datos.
				const libros = await pool.query('SELECT * FROM Libros WHERE Id = ?', [Id]);
			
				// Verifica si se encontró algún libro.
				if (libros.length > 0) {
					resp.json(libros[0]);
				} else {
					// Si no se encuentra el libro, devuelve un mensaje de error.
					resp.status(404).json({ text: 'El libro no existe' });
				}
			} catch (error){
				console.error('Error al mostrar el libro:', error);
				resp.status(500).json({ message: 'Error interno del servidor' });
			}
		}
		
	}
	
const librosController = new LibrosController();
export default librosController;
