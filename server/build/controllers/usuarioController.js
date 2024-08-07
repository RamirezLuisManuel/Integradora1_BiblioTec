"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioController {
    list(req, resp) {
        console.log(req.body);
        resp.json({ text: 'Lista de usuarios' });
    }
    create(req, resp) {
        resp.json({ text: 'Creación de un usuario' });
    }
    delete(req, resp) {
        resp.json({ text: 'Eliminar un usuario' });
    }
    update(req, resp) {
        resp.json({ text: 'Actualizando un usuario' + req.params.Id });
    }
    getOne(req, resp) {
        resp.json({ text: 'Este es el usuario' + req.params.Id });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
