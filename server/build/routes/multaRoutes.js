"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multaController_1 = __importDefault(require("../controllers/multaController"));
class MultaRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Se está creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
        this.config();
    }
    config() {
        this.router.get('/', multaController_1.default.list); //Creando una ruta de mi aplicación del servidor para  la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/', multaController_1.default.create);
        this.router.delete('/:Id', multaController_1.default.delete); //aquí se indica que recibe como parámetro el id  del juego para poder eliminarlo.
        this.router.put('/:Id', multaController_1.default.update);
        this.router.get('/:Id', multaController_1.default.getOne);
    }
}
const multaRoutes = new MultaRoutes();
exports.default = multaRoutes.router;
