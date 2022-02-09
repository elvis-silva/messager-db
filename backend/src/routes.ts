import { Router, Request, Response } from 'express';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ListMessageController } from './controllers/ListMessageController';

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get('/', (req: Request, res: Response) => {
  return res.json({message: 'Bem vindo a API da Loja'});
});

router.get('/message', listMessageController.handler);
router.post('/message', createMessageController.handler);

export { router }
