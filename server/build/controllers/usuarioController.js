"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield database_1.default.query('SELECT * FROM Usuario');
                resp.json(usuarios);
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al obtener los usuarios', error });
            }
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO Usuario SET ?', [req.body]);
                resp.json({ message: 'Usuario guardado' });
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al crear el usuario', error });
            }
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Matricula } = req.params;
                const result = yield database_1.default.query('DELETE FROM Usuario WHERE Matricula = ?', [Matricula]);
                if (result.affectedRows > 0) {
                    resp.json({ message: 'El usuario fue eliminado' });
                }
                else {
                    resp.status(404).json({ message: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al eliminar el usuario', error });
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Matricula } = req.params;
                const result = yield database_1.default.query('UPDATE Usuario SET ? WHERE Matricula = ?', [req.body, Matricula]);
                if (result.affectedRows > 0) {
                    resp.json({ message: 'El usuario fue actualizado' });
                }
                else {
                    resp.status(404).json({ message: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al actualizar el usuario', error });
            }
        });
    }
    login(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Matricula, Contrasenia } = req.body;
                // Consulta para verificar el usuario y la contraseña
                const usuarios = yield database_1.default.query('SELECT Matricula, IdTipo FROM Usuario WHERE Matricula = ? AND Contrasenia = SHA2(?, 256)', [Matricula, Contrasenia]);
                if (usuarios.length > 0) {
                    // Si se encuentra el usuario, enviar respuesta de éxito con el tipo de usuario
                    const usuario = usuarios[0];
                    resp.json({ success: true, IdTipo: usuario.IdTipo });
                }
                else {
                    // Si no se encuentra el usuario, enviar respuesta de error
                    resp.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
                }
            }
            catch (error) {
                resp.status(500).json({ message: 'Error en la autenticación', error });
            }
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
