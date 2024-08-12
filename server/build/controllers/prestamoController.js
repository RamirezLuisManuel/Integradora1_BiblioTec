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
            const prestamo = yield database_1.default.query('SELECT * FROM Prestamos');
            resp.json(prestamo);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Prestamos set ?', [req.body]);
            resp.json({ message: 'Datos de prestamo guardados' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            yield database_1.default.query('DELETE FROM Prestamos WHERE Id=?', [Id]);
            resp.json({ message: 'EL prestamo fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            yield database_1.default.query('UPDATE Prestamos set ? WHERE Id = ?', [req.body, Id]);
            resp.json({ message: 'EL prestamo fue atualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params; //se recupera el id del request params.
            const prestamo = yield database_1.default.query('SELECT * FROM Libros WHERE Id=?', [Id]);
            if (prestamo.length > 0) {
                return resp.json(prestamo[0]);
            }
            resp.status(404).json({ text: 'Datos del prestamo no existen' });
        });
    }
}
const prestamoController = new PrestamoController();
exports.default = prestamoController;
