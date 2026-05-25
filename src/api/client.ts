import type { Book, BookInput, ApiErrorResponse } from '../types/book';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api/v1';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = (await response.json().catch(() => ({ message: 'Error inesperado' }))) as ApiErrorResponse;
    throw new Error(error.message);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export const booksApi = {
  getBooks: () => request<Book[]>('/books'),
  createBook: (book: BookInput) => request<Book>('/books', { method: 'POST', body: JSON.stringify(book) }),
  updateBook: (id: string, book: BookInput) => request<Book>(`/books/${id}`, { method: 'PUT', body: JSON.stringify(book) }),
  deleteBook: (id: string) => request<void>(`/books/${id}`, { method: 'DELETE' }),
};
