import { useMemo } from 'react';
import type { Book, ReadingStatus } from '../types/book';

export function useFilteredBooks(books: Book[], search: string, statusFilter: ReadingStatus | 'all') {
  return useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return books.filter((book) => {
      const matchesSearch = !normalizedSearch || book.title.toLowerCase().includes(normalizedSearch) || book.author.toLowerCase().includes(normalizedSearch);
      const matchesStatus = statusFilter === 'all' || book.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [books, search, statusFilter]);
}
