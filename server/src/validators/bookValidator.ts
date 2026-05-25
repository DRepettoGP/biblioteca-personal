import type { BookInput, ReadingStatus } from '../types/book';

const validStatuses: ReadingStatus[] = ['pending', 'reading', 'read'];

export function validateBookInput(body: Partial<BookInput>) {
  if (!body.title || typeof body.title !== 'string') return 'El título es obligatorio.';
  if (!body.author || typeof body.author !== 'string') return 'El autor es obligatorio.';
  if (!body.status || !validStatuses.includes(body.status)) return 'El estado no es válido.';
  if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) return 'La valoración debe estar entre 1 y 5.';
  if (typeof body.notes !== 'string') return 'Las notas deben ser texto.';

  return null;
}
