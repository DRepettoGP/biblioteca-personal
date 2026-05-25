import { useState } from 'react';
import { BookCard } from '../components/BookCard';
import { BookForm } from '../components/BookForm';
import { StatCard } from '../components/StatCard';
import { useLibrary } from '../context/LibraryContext';
import { useFilteredBooks } from '../hooks/useFilteredBooks';
import type { Book, BookInput, ReadingStatus } from '../types/book';
import { statusLabels, statusOptions } from '../utils/status';

export function LibraryPage() {
  const { books, loading, error, search, statusFilter, stats, setSearch, setStatusFilter, refreshBooks, addBook, editBook, removeBook } = useLibrary();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const filteredBooks = useFilteredBooks(books, search, statusFilter);

  async function handleSubmit(book: BookInput) {
    if (selectedBook) {
      await editBook(selectedBook.id, book);
      setSelectedBook(null);
      return;
    }

    await addBook(book);
  }

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-soft">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-200">Biblioteca personal</p>
          <h2 className="mt-3 text-4xl font-black md:text-6xl">Organiza tus próximas lecturas</h2>
          <p className="mt-4 text-slate-200">Guarda libros, controla su estado y encuentra rápido qué quieres leer después.</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total" value={stats.total} />
        <StatCard label="Pendientes" value={stats.pending} />
        <StatCard label="Leyendo" value={stats.reading} />
        <StatCard label="Leídos" value={stats.read} />
      </section>

      <BookForm selectedBook={selectedBook} onSubmit={handleSubmit} onCancel={() => setSelectedBook(null)} />

      <section className="rounded-3xl bg-white p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" placeholder="Buscar por título o autor..." value={search} onChange={(event) => setSearch(event.target.value)} />
          <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as ReadingStatus | 'all')}>
            <option value="all">Todos los estados</option>
            {statusOptions.map((status) => <option key={status} value={status}>{statusLabels[status]}</option>)}
          </select>
        </div>
      </section>

      {loading && <p className="rounded-3xl bg-white p-6 text-center font-semibold shadow-soft">Cargando biblioteca...</p>}
      {error && <div className="rounded-3xl bg-red-50 p-6 text-red-700 shadow-soft"><p className="font-bold">{error}</p><button onClick={refreshBooks} className="mt-3 rounded-full bg-red-600 px-4 py-2 font-bold text-white">Reintentar</button></div>}
      {!loading && !error && filteredBooks.length === 0 && <p className="rounded-3xl bg-white p-6 text-center text-slate-600 shadow-soft">No hay libros que coincidan con la búsqueda.</p>}
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book) => <BookCard key={book.id} book={book} onEdit={setSelectedBook} onDelete={removeBook} />)}
      </section>
    </div>
  );
}
