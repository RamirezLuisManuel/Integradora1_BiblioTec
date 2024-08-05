"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventarioController {
    list(req, resp) {
        resp.json({ text: 'Inventario' });
    }
    create(req, resp) {
        console.log(req.body);
        resp.json({ text: 'Crear libro' });
    }
    delete(req, resp) {
        resp.json({ text: 'Borrar libro' });
    }
    update(req, resp) {
        resp.json({ text: 'Actualizar libro' + req.params.Id });
    }
    getOne(req, resp) {
        resp.json({ text: 'Este es un libro' + req.params.Id });
    }
}
const inventarioController = new InventarioController();
exports.default = inventarioController;
