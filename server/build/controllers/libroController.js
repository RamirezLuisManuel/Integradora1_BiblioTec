"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibrosController {
    list(req, resp) {
        console.log(req.body);
        resp.json({ text: 'Listig books' });
    }
    create(req, resp) {
        resp.json({ text: 'Creating a book’' });
    }
    delete(req, resp) {
        resp.json({ text: 'Deleting a book' });
    }
    update(req, resp) {
        resp.json({ text: 'Updating a book' + req.params.Id });
    }
    getOne(req, resp) {
        resp.json({ text: 'This is a book' + req.params.Id });
    }
}
const librosController = new LibrosController();
exports.default = librosController;
