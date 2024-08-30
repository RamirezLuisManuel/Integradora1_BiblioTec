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
class LibrosController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libros = yield database_1.default.query('SELECT * FROM Libros');
                resp.json(libros);
            }
            catch (error) {
                console.error('Error al listar libros:', error);
                resp.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Isbn } = req.body;
                // Verificar si el ID ya existe en la base de datos
                const existingBook = yield database_1.default.query('SELECT * FROM Libro WHERE Isbn = ?', [Isbn]);
                if (existingBook.length > 0) {
                    resp.status(400).json({ message: 'El ISBN ya existe. No se puede duplicar.' });
                    return;
                }
                // Si no existe, proceder a insertar el nuevo libro
                yield database_1.default.query('INSERT INTO Libro SET ?', [req.body]);
                resp.json({ message: 'Libro guardado' });
            }
            catch (error) {
                console.error('Error al crear el libro:', error);
                resp.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Isbn } = req.params;
                const libro = yield database_1.default.query('SELECT * FROM Libros WHERE Isbn = ?', [Isbn]);
                if (libro.length > 0) {
                    yield database_1.default.query('DELETE FROM Libros WHERE Isbn = ?', [Isbn]);
                    resp.json({ message: 'El libro fue eliminado' });
                }
                else {
                    resp.status(404).json({ text: 'El libro no existe' });
                }
            }
            catch (error) {
                console.error('Error al eliminar el libro:', error);
                resp.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Isbn } = req.params;
                const libro = yield database_1.default.query('SELECT * FROM Libros WHERE Isbn = ?', [Isbn]);
                if (libro.length > 0) {
                    yield database_1.default.query('UPDATE Libros set ? WHERE Isbn = ?', [req.body, Isbn]);
                    resp.json({ message: 'El libro fue actualizado' });
                }
                else {
                    resp.status(404).json({ text: 'El libro no existe' });
                }
            }
            catch (error) {
                console.error('Error al actualizar el libro:', error);
                resp.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Isbn } = req.params; // Se recupera el ISBN de los parámetros de la solicitud.
                // Ejecuta la consulta en la base de datos.
                const libros = yield database_1.default.query('SELECT * FROM Libros WHERE Isbn = ?', [Isbn]);
                // Verifica si se encontró algún libro.
                if (libros.length > 0) {
                    resp.json(libros[0]);
                }
                else {
                    // Si no se encuentra el libro, devuelve un mensaje de error.
                    resp.status(404).json({ text: 'El libro no existe' });
                }
            }
            catch (error) {
                console.error('Error al mostrar el libro:', error);
                resp.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
}
const librosController = new LibrosController();
exports.default = librosController;
