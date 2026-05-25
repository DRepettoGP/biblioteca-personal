import type { VercelRequest, VercelResponse } from '@vercel/node';
import { booksService } from '../../../server/src/services/booksService';
import type { BookInput } from '../../../server/src/types/book';
import { validateBookInput } from '../../../server/src/validators/bookValidator';

function getId(request: VercelRequest) {
  const value = request.query.id;
  return Array.isArray(value) ? value[0] : value;
}

export default function handler(request: VercelRequest, response: VercelResponse) {
  const id = getId(request);

  if (!id) {
    response.status(400).json({ message: 'Id obligatorio.' });
    return;
  }

  if (request.method === 'GET') {
    const book = booksService.findById(id);

    if (!book) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    response.status(200).json(book);
    return;
  }

  if (request.method === 'PUT') {
    const error = validateBookInput(request.body);

    if (error) {
      response.status(400).json({ message: error });
      return;
    }

    const updated = booksService.update(id, request.body as BookInput);

    if (!updated) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    response.status(200).json(updated);
    return;
  }

  if (request.method === 'DELETE') {
    const removed = booksService.remove(id);

    if (!removed) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    response.status(204).end();
    return;
  }

  response.setHeader('Allow', 'GET, PUT, DELETE');
  response.status(405).json({ message: 'Método no permitido.' });
}
