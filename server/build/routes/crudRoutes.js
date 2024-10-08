"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libroController_1 = __importDefault(require("../controllers/libroController"));
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
        this.config();
    }
    config() {
        this.router.get('/crud/', libroController_1.default.list); //Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/crud/', libroController_1.default.create);
        this.router.delete('/crud/:Id', libroController_1.default.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/crud/:Id', libroController_1.default.update);
        this.router.get('/crud/:Id', libroController_1.default.getOne);
    }
}
const inventarioRoutes = new InventarioRoutes();
exports.default = inventarioRoutes.router;
