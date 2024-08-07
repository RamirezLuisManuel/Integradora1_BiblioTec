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
class LibrosController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield database_1.default.query('SELECT * FROM Libros');
            resp.json(libros);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Libros set ?', [req.body]);
            resp.json({ message: 'Libro guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            yield database_1.default.query('DELETE FROM Libros WHERE Id=?', [Id]);
            resp.json({ message: 'EL libro fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            yield database_1.default.query('UPDATE Libros set ? WHERE Id = ?', [req.body, Id]);
            resp.json({ message: 'EL libro fue atualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params; //se recupera el id del request params.
            const libros = yield database_1.default.query('SELECT * FROM Libros WHERE Id=?', [Id]);
            if (libros.length > 0) {
                return resp.json(libros[0]);
            }
            resp.status(404).json({ text: 'EL libro no existe' });
        });
    }
}
const librosController = new LibrosController();
exports.default = librosController;
