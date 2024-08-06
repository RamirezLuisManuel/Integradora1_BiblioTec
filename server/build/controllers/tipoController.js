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
            const tipoU = yield database_1.default.query('SELECT * FROM TipoUsuario');
            resp.json(tipoU);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO TipoUsuario set ?', [req.body]);
            resp.json({ message: 'Tipo guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdTipo } = req.params;
            yield database_1.default.query('DELETE FROM TipoUsuario WHERE IdTipo=?', [IdTipo]);
            resp.json({ message: 'EL tipo fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdTipo } = req.params;
            yield database_1.default.query('UPDATE TipoUsuario set ? WHERE IdTipo = ?', [req.body, IdTipo]);
            resp.json({ message: 'EL tipo fue atualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdTipo } = req.params; //se recupera el id del request params.
            const libros = yield database_1.default.query('SELECT * FROM TipoUsuario WHERE IdTipo=?', [IdTipo]);
            if (libros.length > 0) {
                return resp.json(libros[0]);
            }
            resp.status(404).json({ text: 'EL tipo no existe' });
        });
    }
}
const tipoController = new TipoController();
exports.default = tipoController;
