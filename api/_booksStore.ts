import { randomUUID } from 'node:crypto';

export type ReadingStatus = 'pending' | 'reading' | 'read';

export interface Book {
  id: string;
  title: string;
  author: string;
  status: ReadingStatus;
  rating: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookInput {
  title: string;
  author: string;
  status: ReadingStatus;
  rating: number;
  notes: string;
}

const now = new Date().toISOString();
const validStatuses: ReadingStatus[] = ['pending', 'reading', 'read'];

let books: Book[] = [
  {
    id: '1',
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
    status: 'read',
    rating: 5,
    notes: 'Una lectura breve con muchas capas de significado.',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    status: 'reading',
    rating: 4,
    notes: 'Ideal para reflexionar sobre vigilancia y libertad.',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: '3',
    title: 'Hábitos atómicos',
    author: 'James Clear',
    status: 'pending',
    rating: 3,
    notes: 'Pendiente para mejorar rutinas personales.',
    createdAt: now,
    updatedAt: now,
  },
];

export function validateBookInput(body: Partial<BookInput>) {
  if (!body.title || typeof body.title !== 'string') return 'El título es obligatorio.';
  if (!body.author || typeof body.author !== 'string') return 'El autor es obligatorio.';
  if (!body.status || !validStatuses.includes(body.status)) return 'El estado no es válido.';
  if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) return 'La valoración debe estar entre 1 y 5.';
  if (typeof body.notes !== 'string') return 'Las notas deben ser texto.';

  return null;
}

export const booksStore = {
  findAll: () => books,
  findById: (id: string) => books.find((book) => book.id === id),
  create: (input: BookInput) => {
    const date = new Date().toISOString();
    const book: Book = { id: randomUUID(), ...input, createdAt: date, updatedAt: date };
    books = [book, ...books];
    return book;
  },
  update: (id: string, input: BookInput) => {
    const existing = books.find((book) => book.id === id);

    if (!existing) return null;

    const updated: Book = { ...existing, ...input, updatedAt: new Date().toISOString() };
    books = books.map((book) => (book.id === id ? updated : book));
    return updated;
  },
  remove: (id: string) => {
    const exists = books.some((book) => book.id === id);

    if (!exists) return false;

    books = books.filter((book) => book.id !== id);
    return true;
  },
};
