import{Request, Response} from 'express';
	class IndexController{
		public index(req : Request, resp : Response){
			resp.send('No nos repruebe');
		}
	}
export const indexController = new IndexController();
