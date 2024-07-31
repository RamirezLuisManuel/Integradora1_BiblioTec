import{Request, Response} from 'express';
	class IndexController{
		public index(req : Request, resp : Response){
			resp.send('Quiubole raza');
		}
	}
export const indexController = new IndexController();
