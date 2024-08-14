import { Request, Response } from 'express';
import pool from '../database';

class UsuarioController {
  public async list(req: Request, resp: Response): Promise<void> {
    try {
      const usuarios = await pool.query('SELECT * FROM Usuarios');
      resp.json(usuarios);
    } catch (error) {
      resp.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
  }

  public async create(req: Request, resp: Response): Promise<void> {
    try {
      await pool.query('INSERT INTO Usuarios SET ?', [req.body]);
      resp.json({ message: 'Usuario guardado' });
    } catch (error) {
      resp.status(500).json({ message: 'Error al crear el usuario', error });
    }
  }

  public async delete(req: Request, resp: Response): Promise<void> {
    try {
      const { Matricula } = req.params;
      const result = await pool.query('DELETE FROM Usuarios WHERE Matricula = ?', [Matricula]);
      if (result.affectedRows > 0) {
        resp.json({ message: 'El usuario fue eliminado' });
      } else {
        resp.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      resp.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
  }

  public async update(req: Request, resp: Response): Promise<void> {
    try {
      const { Matricula } = req.params;
      const result = await pool.query('UPDATE Usuarios SET ? WHERE Matricula = ?', [req.body, Matricula]);
      if (result.affectedRows > 0) {
        resp.json({ message: 'El usuario fue actualizado' });
      } else {
        resp.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      resp.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
  }

  public async login(req: Request, resp: Response): Promise<void> {
    try {
      const { Matricula, Contrasenia } = req.body;
      
      // Consulta para verificar el usuario y la contraseña
      const usuarios = await pool.query('SELECT * FROM Usuarios WHERE Matricula = ? AND Contrasenia = SHA2(?, 256)', [Matricula, Contrasenia]);
  
      if (usuarios.length > 0) {
        // Si se encuentra el usuario, enviar respuesta de éxito
        resp.json({ success: true });
      } else {
        // Si no se encuentra el usuario, enviar respuesta de error
        resp.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
    } catch (error) {
      resp.status(500).json({ message: 'Error en la autenticación', error });
    }
  }
  
 // public async getOne(req: Request, resp: Response): Promise<void> {
 //   try {
  //    const { Matricula } = req.params; // Se recupera la matrícula del request params.
    //  const usuarios = await pool.query('SELECT * FROM Usuarios WHERE Matricula = ?', [Matricula]);
    //  if (usuarios.length > 0) {
    //     resp.json(usuarios[0]);
    //  }
    //  resp.status(404).json({ message: 'El usuario no existe' });
    //} catch (error) {
   //   resp.status(500).json({ message: 'Error al obtener el usuario', error });
   // }
 // }
//}
}
const usuarioController = new UsuarioController();
export default usuarioController;
