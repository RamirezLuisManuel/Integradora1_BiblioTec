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
class NovedadesController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const novedades = yield database_1.default.query('SELECT * FROM Novedades');
            resp.json(novedades);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Novedades set ?', [req.body]);
            resp.json({ message: 'Novedad guardada' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdNovedad } = req.params;
            yield database_1.default.query('DELETE FROM Novedades WHERE IdNovedad=?', [IdNovedad]);
            resp.json({ message: 'La novedad fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdNovedad } = req.params;
            yield database_1.default.query('UPDATE Novedades set ? WHERE IdNovedad = ?', [req.body, IdNovedad]);
            resp.json({ message: 'La novedad fue atualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdNovedad } = req.params; //se recupera el id del request params.
            const novedades = yield database_1.default.query('SELECT * FROM Novedades WHERE IdNovedad=?', [IdNovedad]);
            if (novedades.length > 0) {
                return resp.json(novedades[0]);
            }
            resp.status(404).json({ text: 'La novedad no existe' });
        });
    }
}
const novedadesController = new NovedadesController();
exports.default = novedadesController;
