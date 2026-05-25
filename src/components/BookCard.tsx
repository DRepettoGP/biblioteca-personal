import { Pencil, Star, Trash2 } from 'lucide-react';
import type { Book } from '../types/book';
import { statusLabels } from '../utils/status';

type BookCardProps = {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
};

export function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-chapter">{statusLabels[book.status]}</span>
          <h3 className="mt-4 text-xl font-black text-ink">{book.title}</h3>
          <p className="text-sm text-slate-600">{book.author}</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-violet-100 hover:text-chapter" onClick={() => onEdit(book)} aria-label="Editar libro">
            <Pencil size={18} />
          </button>
          <button className="rounded-full bg-red-50 p-2 text-red-500 hover:bg-red-100" onClick={() => onDelete(book.id)} aria-label="Eliminar libro">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="mt-4 min-h-12 text-sm text-slate-600">{book.notes || 'Sin notas todavía.'}</p>
      <div className="mt-5 flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill={index < book.rating ? 'currentColor' : 'none'} />)}
      </div>
    </article>
  );
}
