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
class InventarioController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventario = yield database_1.default.query('SELECT * FROM Inventario');
            resp.json(inventario);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Inventario set ?', [req.body]);
            resp.json({ message: 'Datos de inventario insertado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CodLibro } = req.params;
            yield database_1.default.query('DELETE FROM Inventario WHERE CodLibro=?', [CodLibro]);
            resp.json({ message: 'Los datos del inventario fueron eliminados' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CodLibro } = req.params;
            yield database_1.default.query('UPDATE Inventario set ? WHERE CodLibro = ?', [req.body, CodLibro]);
            resp.json({ message: 'EL inventario fue atualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CodLibro } = req.params; //se recupera el id del request params.
            const inventario = yield database_1.default.query('SELECT * FROM Inventario WHERE CodLibro=?', [CodLibro]);
            if (inventario.length > 0) {
                return resp.json(inventario[0]);
            }
            resp.status(404).json({ text: 'EL libro no existe' });
        });
    }
}
const inventarioController = new InventarioController();
exports.default = inventarioController;
