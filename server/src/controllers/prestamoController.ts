import { Request, Response } from 'express';
import pool from '../database';

class PrestamoController {
  public async list(req: Request, resp: Response): Promise<void> {
    try {
      const prestamo = await pool.query('SELECT * FROM Prestamos');
      resp.json(prestamo);
    } catch (error) {
      resp.status(500).json({ message: 'Error al obtener los préstamos', error });
    }
  }

  public async create(req: Request, resp: Response): Promise<void> {
    try {
      await pool.query('INSERT INTO Prestamos SET ?', [req.body]);
      resp.json({ message: 'Datos de préstamo guardados' });
    } catch (error) {
      resp.status(500).json({ message: 'Error al crear el préstamo', error });
    }
  }

  public async delete(req: Request, resp: Response): Promise<void> {
    try {
      const { IdPrestamo } = req.params;
      const result = await pool.query('DELETE FROM Prestamos WHERE IdPrestamo = ?', [IdPrestamo]);
      if (result.affectedRows > 0) {
        resp.json({ message: 'El préstamo fue eliminado' });
      } else {
        resp.status(404).json({ message: 'Préstamo no encontrado' });
      }
    } catch (error) {
      resp.status(500).json({ message: 'Error al eliminar el préstamo', error });
    }
  }

  public async update(req: Request, resp: Response): Promise<void> {
    try {
      const { IdPrestamo } = req.params;
      const result = await pool.query('UPDATE Prestamos SET ? WHERE IdPrestamo = ?', [req.body, IdPrestamo]);
      if (result.affectedRows > 0) {
        resp.json({ message: 'El préstamo fue actualizado' });
      } else {
        resp.status(404).json({ message: 'Préstamo no encontrado' });
      }
    } catch (error) {
      resp.status(500).json({ message: 'Error al actualizar el préstamo', error });
    }
  }

  public async getOne(req: Request, resp: Response): Promise<void> {
    try {
      const { IdPrestamo } = req.params; // Se recupera el id del request params.
      const prestamo = await pool.query('SELECT * FROM Prestamos WHERE IdPrestamo = ?', [IdPrestamo]);
      if (prestamo.length > 0) {
<<<<<<< HEAD
        resp.json(prestamo[0]);
=======
         resp.json(prestamo[0]);
>>>>>>> c3f3b4bdcbe3bfb9da80611bc766fc18e725f07c
      }
      resp.status(404).json({ message: 'Datos del préstamo no existen' });
    } catch (error) {
      resp.status(500).json({ message: 'Error al obtener el préstamo', error });
    }
  }
}

const prestamoController = new PrestamoController();
export default prestamoController;
