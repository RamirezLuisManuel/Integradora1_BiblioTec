import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import librosRoutes from './routes/librosRoutes';
import tipousuarioRoutes from './routes/tipousuarioRoutes';

import morgan from 'morgan';
import cors from 'cors';
import inventarioRoutes from './routes/inventarioRoutes';

class Server{
    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config() : void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}))
    }

    routes() : void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/libros',librosRoutes);
        this.app.use('/api/inventario',inventarioRoutes);
        this.app.use('/api/tipo',tipousuarioRoutes);
    }

    start() : void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server(); //ejecuta la clase y devuelve un objeto
server.start();
 
