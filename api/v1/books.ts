type RequestLike = {
  method?: string;
  body?: Partial<BookInput>;
};

type ResponseLike = {
  status: (code: number) => ResponseLike;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

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

const now = new Date().toISOString();
const validStatuses: ReadingStatus[] = ['pending', 'reading', 'read'];

let books: Book[] = [
  { id: '1', title: 'El principito', author: 'Antoine de Saint-Exupéry', status: 'read', rating: 5, notes: 'Una lectura breve con muchas capas de significado.', createdAt: now, updatedAt: now },
  { id: '2', title: '1984', author: 'George Orwell', status: 'reading', rating: 4, notes: 'Ideal para reflexionar sobre vigilancia y libertad.', createdAt: now, updatedAt: now },
  { id: '3', title: 'Hábitos atómicos', author: 'James Clear', status: 'pending', rating: 3, notes: 'Pendiente para mejorar rutinas personales.', createdAt: now, updatedAt: now },
];

function validateBookInput(body: Partial<BookInput> | undefined) {
  if (!body?.title || typeof body.title !== 'string') return 'El título es obligatorio.';
  if (!body.author || typeof body.author !== 'string') return 'El autor es obligatorio.';
  if (!body.status || !validStatuses.includes(body.status)) return 'El estado no es válido.';
  if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) return 'La valoración debe estar entre 1 y 5.';
  if (typeof body.notes !== 'string') return 'Las notas deben ser texto.';

  return null;
}

export default function handler(request: RequestLike, response: ResponseLike) {
  if (request.method === 'GET') {
    response.status(200).json(books);
    return;
  }

  if (request.method === 'POST') {
    const error = validateBookInput(request.body);

    if (error) {
      response.status(400).json({ message: error });
      return;
    }

    const date = new Date().toISOString();
    const book: Book = { id: `${Date.now()}`, ...(request.body as BookInput), createdAt: date, updatedAt: date };
    books = [book, ...books];
    response.status(201).json(book);
    return;
  }

  response.setHeader('Allow', 'GET, POST');
  response.status(405).json({ message: 'Método no permitido.' });
}
