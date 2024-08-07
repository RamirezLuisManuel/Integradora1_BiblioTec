"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultaController {
    list(req, resp) {
        console.log(req.body);
        resp.json({ text: 'Lista de multas' });
    }
    create(req, resp) {
        resp.json({ text: 'Creación de multa' });
    }
    delete(req, resp) {
        resp.json({ text: 'Eliminar una multa' });
    }
    update(req, resp) {
        resp.json({ text: 'Actualizar una multa' + req.params.Id });
    }
    getOne(req, resp) {
        resp.json({ text: 'Esta es la multa' + req.params.Id });
    }
}
const multaController = new MultaController();
exports.default = multaController;
