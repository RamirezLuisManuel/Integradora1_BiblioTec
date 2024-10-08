"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const librosRoutes_1 = __importDefault(require("./routes/librosRoutes"));
const tipousuarioRoutes_1 = __importDefault(require("./routes/tipousuarioRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const inventarioRoutes_1 = __importDefault(require("./routes/inventarioRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const multaRoutes_1 = __importDefault(require("./routes/multaRoutes"));
const prestamoRoutes_1 = __importDefault(require("./routes/prestamoRoutes"));
const novedadesRouter_1 = __importDefault(require("./routes/novedadesRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/libros', librosRoutes_1.default);
        this.app.use('/api/inventario', inventarioRoutes_1.default);
        this.app.use('/api/tipo', tipousuarioRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/multa', multaRoutes_1.default);
        this.app.use('/api/prestamo', prestamoRoutes_1.default);
        this.app.use('/api/novedades', novedadesRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server(); //ejecuta la clase y devuelve un objeto
server.start();
