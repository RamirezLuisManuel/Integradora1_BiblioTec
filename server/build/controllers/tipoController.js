"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipoController {
    list(req, resp) {
        resp.json({ text: 'Lista de tipos' });
    }
    create(req, resp) {
        console.log(req.body);
        resp.json({ text: 'Crear tipo' });
    }
    delete(req, resp) {
        resp.json({ text: 'Borrar tipo' });
    }
    update(req, resp) {
        resp.json({ text: 'Actualizar tipo' + req.params.Id });
    }
    getOne(req, resp) {
        resp.json({ text: 'Este es un tipo' + req.params.Id });
    }
}
const tipoController = new TipoController();
exports.default = tipoController;
