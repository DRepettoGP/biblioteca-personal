import type { Request, Response } from 'express';
import { booksService } from '../services/booksService';
import type { BookInput } from '../types/book';
import { validateBookInput } from '../validators/bookValidator';

export const booksController = {
  getAll: (_request: Request, response: Response) => {
    response.status(200).json(booksService.findAll());
  },
  getById: (request: Request, response: Response) => {
    const id = String(request.params.id);
    const book = booksService.findById(id);

    if (!book) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    response.status(200).json(book);
  },
  create: (request: Request, response: Response) => {
    const error = validateBookInput(request.body);

    if (error) {
      response.status(400).json({ message: error });
      return;
    }

    const created = booksService.create(request.body as BookInput);
    response.status(201).json(created);
  },
  update: (request: Request, response: Response) => {
    const error = validateBookInput(request.body);

    if (error) {
      response.status(400).json({ message: error });
      return;
    }

    const id = String(request.params.id);
    const updated = booksService.update(id, request.body as BookInput);

    if (!updated) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    response.status(200).json(updated);
  },
  remove: (request: Request, response: Response) => {
    const id = String(request.params.id);
    const removed = booksService.remove(id);

    if (!removed) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    response.status(204).send();
  },
};
