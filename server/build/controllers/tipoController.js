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
class TipoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipo = yield database_1.default.query('SELECT * FROM TipoUsuario');
            resp.json(tipo);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdTipo, Descripcion } = req.body;
            // Validar si el IdTipo ya existe
            const existingTipo = yield database_1.default.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
            if (existingTipo.length > 0) {
                resp.status(400).json({ message: 'El IdTipo ya existe' });
                return;
            }
            // Insertar nuevo registro
            yield database_1.default.query('INSERT INTO TipoUsuario set ?', [req.body]);
            resp.json({ message: 'Tipo guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdTipo } = req.params;
            // Verificar si el IdTipo existe
            const existingTipo = yield database_1.default.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
            if (existingTipo.length === 0) {
                resp.status(404).json({ message: 'El tipo no existe' });
                return;
            }
            // Si existe, proceder a eliminarlo
            yield database_1.default.query('DELETE FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
            resp.json({ message: 'El tipo fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IdTipo } = req.params;
                const { IdTipo: newIdTipo } = req.body; // El nuevo IdTipo que se desea actualizar
                // Verificar si el tipo de usuario con el IdTipo actual existe
                const existingTipo = yield database_1.default.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [IdTipo]);
                if (existingTipo.length === 0) {
                    resp.status(404).json({ message: 'El tipo no existe' });
                    return;
                }
                // Si el IdTipo ha cambiado, verificar que el nuevo IdTipo no exista ya en la base de datos
                if (newIdTipo && newIdTipo !== IdTipo) {
                    const idExists = yield database_1.default.query('SELECT * FROM TipoUsuario WHERE IdTipo = ?', [newIdTipo]);
                    if (idExists.length > 0) {
                        resp.status(400).json({ message: 'El nuevo IdTipo ya está en uso por otro tipo' });
                        return;
                    }
                }
                // Actualizar el tipo de usuario
                yield database_1.default.query('UPDATE TipoUsuario SET ? WHERE IdTipo = ?', [req.body, IdTipo]);
                resp.json({ message: 'El tipo fue actualizado' });
            }
            catch (error) {
                console.error('Error al actualizar el tipo:', error);
                resp.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdTipo } = req.params; //se recupera el id del request params.
            const tipo = yield database_1.default.query('SELECT * FROM TipoUsuario WHERE IdTipo=?', [IdTipo]);
            if (tipo.length > 0) {
                return resp.json(tipo[0]);
            }
            resp.status(404).json({ text: 'EL tipo no existe' });
        });
    }
}
const tipoController = new TipoController();
exports.default = tipoController;
