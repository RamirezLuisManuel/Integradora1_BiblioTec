"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrestamoController {
    list(req, resp) {
        console.log(req.body);
        resp.json({ text: 'Lista de prestamos' });
    }
    create(req, resp) {
        resp.json({ text: 'Creación de un prestamo' });
    }
    delete(req, resp) {
        resp.json({ text: 'Eliminar un prestamo' });
    }
    update(req, resp) {
        resp.json({ text: 'Actualizando un prestamo' + req.params.Id });
    }
    getOne(req, resp) {
        resp.json({ text: 'Este es el prestamo' + req.params.Id });
    }
}
const prestamoController = new PrestamoController();
exports.default = prestamoController;
