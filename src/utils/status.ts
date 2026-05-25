import type { ReadingStatus } from '../types/book';

export const statusLabels: Record<ReadingStatus, string> = {
  pending: 'Pendiente',
  reading: 'Leyendo',
  read: 'Leído',
};

export const statusOptions: ReadingStatus[] = ['pending', 'reading', 'read'];
