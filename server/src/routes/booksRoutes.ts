import { Router } from 'express';
import { booksController } from '../controllers/booksController';

export const booksRouter = Router();

booksRouter.get('/', booksController.getAll);
booksRouter.get('/:id', booksController.getById);
booksRouter.post('/', booksController.create);
booksRouter.put('/:id', booksController.update);
booksRouter.delete('/:id', booksController.remove);
