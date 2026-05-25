import { randomUUID } from 'node:crypto';
import { initialBooks } from '../data/books';
import type { Book, BookInput } from '../types/book';

let books: Book[] = [...initialBooks];

export const booksService = {
  findAll: () => books,
  findById: (id: string) => books.find((book) => book.id === id),
  create: (input: BookInput) => {
    const now = new Date().toISOString();
    const book: Book = { id: randomUUID(), ...input, createdAt: now, updatedAt: now };
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
