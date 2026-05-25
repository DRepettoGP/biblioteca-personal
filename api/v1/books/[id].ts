type ReadingStatus = 'pending' | 'reading' | 'read';

type BookInput = {
  title: string;
  author: string;
  status: ReadingStatus;
  rating: number;
  notes: string;
};

type Book = BookInput & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

type RequestLike = {
  method?: string;
  query: { id?: string | string[] };
  body?: Partial<BookInput>;
};

type ResponseLike = {
  status: (code: number) => ResponseLike;
  json: (body: unknown) => void;
  end: () => void;
  setHeader: (name: string, value: string) => void;
};

const now = new Date().toISOString();
const validStatuses: ReadingStatus[] = ['pending', 'reading', 'read'];

let books: Book[] = [
  { id: '1', title: 'El principito', author: 'Antoine de Saint-Exupéry', status: 'read', rating: 5, notes: 'Una lectura breve con muchas capas de significado.', createdAt: now, updatedAt: now },
  { id: '2', title: '1984', author: 'George Orwell', status: 'reading', rating: 4, notes: 'Ideal para reflexionar sobre vigilancia y libertad.', createdAt: now, updatedAt: now },
  { id: '3', title: 'Hábitos atómicos', author: 'James Clear', status: 'pending', rating: 3, notes: 'Pendiente para mejorar rutinas personales.', createdAt: now, updatedAt: now },
];

function getId(request: RequestLike) {
  const value = request.query.id;
  return Array.isArray(value) ? value[0] : value;
}

function validateBookInput(body: Partial<BookInput> | undefined) {
  if (!body?.title || typeof body.title !== 'string') return 'El título es obligatorio.';
  if (!body.author || typeof body.author !== 'string') return 'El autor es obligatorio.';
  if (!body.status || !validStatuses.includes(body.status)) return 'El estado no es válido.';
  if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) return 'La valoración debe estar entre 1 y 5.';
  if (typeof body.notes !== 'string') return 'Las notas deben ser texto.';

  return null;
}

export default function handler(request: RequestLike, response: ResponseLike) {
  const id = getId(request);

  if (!id) {
    response.status(400).json({ message: 'Id obligatorio.' });
    return;
  }

  if (request.method === 'GET') {
    const book = books.find((item) => item.id === id);

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

    const existing = books.find((item) => item.id === id);

    if (!existing) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    const updated: Book = { ...existing, ...(request.body as BookInput), updatedAt: new Date().toISOString() };
    books = books.map((item) => (item.id === id ? updated : item));
    response.status(200).json(updated);
    return;
  }

  if (request.method === 'DELETE') {
    const removed = books.some((item) => item.id === id);

    if (!removed) {
      response.status(404).json({ message: 'Libro no encontrado.' });
      return;
    }

    books = books.filter((item) => item.id !== id);
    response.status(204).end();
    return;
  }

  response.setHeader('Allow', 'GET, PUT, DELETE');
  response.status(405).json({ message: 'Método no permitido.' });
}
