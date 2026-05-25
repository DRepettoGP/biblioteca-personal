import { useEffect, useState, type FormEvent } from 'react';
import type { Book, BookInput, ReadingStatus } from '../types/book';
import { statusLabels, statusOptions } from '../utils/status';

type BookFormProps = {
  selectedBook: Book | null;
  onSubmit: (book: BookInput) => Promise<void>;
  onCancel: () => void;
};

const emptyForm: BookInput = { title: '', author: '', status: 'pending', rating: 3, notes: '' };

export function BookForm({ selectedBook, onSubmit, onCancel }: BookFormProps) {
  const [form, setForm] = useState<BookInput>(emptyForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm(selectedBook ? {
      title: selectedBook.title,
      author: selectedBook.author,
      status: selectedBook.status,
      rating: selectedBook.rating,
      notes: selectedBook.notes,
    } : emptyForm);
    setError('');
    setSuccess('');
  }, [selectedBook]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.title.trim() || !form.author.trim()) {
      setError('El título y el autor son obligatorios.');
      return;
    }

    try {
      setSaving(true);
      setError('');
      await onSubmit({ ...form, title: form.title.trim(), author: form.author.trim(), notes: form.notes.trim() });
      setSuccess(selectedBook ? 'Libro actualizado correctamente.' : 'Libro añadido correctamente.');
      if (!selectedBook) setForm(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo guardar el libro.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-black">{selectedBook ? 'Editar libro' : 'Añadir libro'}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-bold text-slate-700">Título
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
        </label>
        <label className="text-sm font-bold text-slate-700">Autor
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" value={form.author} onChange={(event) => setForm({ ...form, author: event.target.value })} />
        </label>
        <label className="text-sm font-bold text-slate-700">Estado
          <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as ReadingStatus })}>
            {statusOptions.map((status) => <option key={status} value={status}>{statusLabels[status]}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-700">Valoración
          <input type="number" min="1" max="5" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" value={form.rating} onChange={(event) => setForm({ ...form, rating: Number(event.target.value) })} />
        </label>
      </div>
      <label className="mt-4 block text-sm font-bold text-slate-700">Notas
        <textarea className="mt-2 min-h-24 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-chapter" value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} />
      </label>
      {error && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p>}
      {success && <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{success}</p>}
      <div className="mt-5 flex flex-wrap gap-3">
        <button disabled={saving} className="rounded-full bg-chapter px-5 py-3 font-bold text-white disabled:opacity-60">{saving ? 'Guardando...' : selectedBook ? 'Guardar cambios' : 'Añadir libro'}</button>
        {selectedBook && <button type="button" onClick={onCancel} className="rounded-full bg-slate-100 px-5 py-3 font-bold text-slate-700">Cancelar</button>}
      </div>
    </form>
  );
}
