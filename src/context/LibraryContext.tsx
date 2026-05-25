import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { booksApi } from '../api/client';
import type { Book, BookInput, ReadingStatus } from '../types/book';

type LibraryContextValue = {
  books: Book[];
  loading: boolean;
  error: string | null;
  search: string;
  statusFilter: ReadingStatus | 'all';
  stats: { total: number; pending: number; reading: number; read: number };
  setSearch: (value: string) => void;
  setStatusFilter: (value: ReadingStatus | 'all') => void;
  refreshBooks: () => Promise<void>;
  addBook: (book: BookInput) => Promise<void>;
  editBook: (id: string, book: BookInput) => Promise<void>;
  removeBook: (id: string) => Promise<void>;
};

const LibraryContext = createContext<LibraryContextValue | undefined>(undefined);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<ReadingStatus | 'all'>('all');

  const refreshBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setBooks(await booksApi.getBooks());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshBooks();
  }, [refreshBooks]);

  const addBook = useCallback(async (book: BookInput) => {
    const created = await booksApi.createBook(book);
    setBooks((current) => [created, ...current]);
  }, []);

  const editBook = useCallback(async (id: string, book: BookInput) => {
    const updated = await booksApi.updateBook(id, book);
    setBooks((current) => current.map((item) => (item.id === id ? updated : item)));
  }, []);

  const removeBook = useCallback(async (id: string) => {
    await booksApi.deleteBook(id);
    setBooks((current) => current.filter((item) => item.id !== id));
  }, []);

  const stats = useMemo(() => ({
    total: books.length,
    pending: books.filter((book) => book.status === 'pending').length,
    reading: books.filter((book) => book.status === 'reading').length,
    read: books.filter((book) => book.status === 'read').length,
  }), [books]);

  const value = useMemo(() => ({
    books,
    loading,
    error,
    search,
    statusFilter,
    stats,
    setSearch,
    setStatusFilter,
    refreshBooks,
    addBook,
    editBook,
    removeBook,
  }), [books, loading, error, search, statusFilter, stats, refreshBooks, addBook, editBook, removeBook]);

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error('useLibrary debe usarse dentro de LibraryProvider');
  }

  return context;
}
