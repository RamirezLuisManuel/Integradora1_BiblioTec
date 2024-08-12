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
            const usuarios = yield database_1.default.query('SELECT * FROM Usuarios');
            resp.json(usuarios);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Usuarios set ?', [req.body]);
            resp.json({ message: 'Usuario guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            yield database_1.default.query('DELETE FROM Usuarios WHERE Id=?', [Id]);
            resp.json({ message: 'EL usuario fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            yield database_1.default.query('UPDATE Usuarios set ? WHERE Id = ?', [req.body, Id]);
            resp.json({ message: 'EL usuario fue atualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params; //se recupera el id del request params.
            const usuarios = yield database_1.default.query('SELECT * FROM Usuarios WHERE Id=?', [Id]);
            if (usuarios.length > 0) {
                return resp.json(usuarios[0]);
            }
            resp.status(404).json({ text: 'EL usuario no existe' });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
