import cors from 'cors';
import express from 'express';
import { booksRouter } from '../routes/booksRoutes';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_request, response) => {
    response.status(200).json({ status: 'ok', app: 'NextChapter API' });
  });

  app.use('/api/v1/books', booksRouter);

  app.use((_request, response) => {
    response.status(404).json({ message: 'Endpoint no encontrado.' });
  });

  return app;
}
