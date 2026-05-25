import type { VercelRequest, VercelResponse } from '@vercel/node';
import { booksStore, validateBookInput, type BookInput } from '../_booksStore';

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    response.status(200).json(booksStore.findAll());
    return;
  }

  if (request.method === 'POST') {
    const error = validateBookInput(request.body);

    if (error) {
      response.status(400).json({ message: error });
      return;
    }

    response.status(201).json(booksStore.create(request.body as BookInput));
    return;
  }

  response.setHeader('Allow', 'GET, POST');
  response.status(405).json({ message: 'Método no permitido.' });
}
