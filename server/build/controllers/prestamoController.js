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
class PrestamoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prestamo = yield database_1.default.query('SELECT * FROM Prestamo');
                resp.json(prestamo);
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al obtener los préstamos', error });
            }
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO Prestamo SET ?', [req.body]);
                resp.json({ message: 'Datos de préstamo guardados' });
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al crear el préstamo', error });
            }
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IdPrestamo } = req.params;
                const result = yield database_1.default.query('DELETE FROM Prestamo WHERE IdPrestamo = ?', [IdPrestamo]);
                if (result.affectedRows > 0) {
                    resp.json({ message: 'El préstamo fue eliminado' });
                }
                else {
                    resp.status(404).json({ message: 'Préstamo no encontrado' });
                }
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al eliminar el préstamo', error });
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IdPrestamo } = req.params;
                const result = yield database_1.default.query('UPDATE Prestamo SET ? WHERE IdPrestamo = ?', [req.body, IdPrestamo]);
                if (result.affectedRows > 0) {
                    resp.json({ message: 'El préstamo fue actualizado' });
                }
                else {
                    resp.status(404).json({ message: 'Préstamo no encontrado' });
                }
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al actualizar el préstamo', error });
            }
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IdPrestamo } = req.params; // Se recupera el id del request params.
                const prestamo = yield database_1.default.query('SELECT * FROM Prestamo WHERE IdPrestamo = ?', [IdPrestamo]);
                if (prestamo.length > 0) {
                    resp.json(prestamo[0]);
                }
                resp.status(404).json({ message: 'Datos del préstamo no existen' });
            }
            catch (error) {
                resp.status(500).json({ message: 'Error al obtener el préstamo', error });
            }
        });
    }
}
const prestamoController = new PrestamoController();
exports.default = prestamoController;
