import type { Book } from '../types/book';

export const initialBooks: Book[] = [
  {
    id: '1',
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
    status: 'read',
    rating: 5,
    notes: 'Una lectura breve con muchas capas de significado.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    status: 'reading',
    rating: 4,
    notes: 'Ideal para reflexionar sobre vigilancia y libertad.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Hábitos atómicos',
    author: 'James Clear',
    status: 'pending',
    rating: 3,
    notes: 'Pendiente para mejorar rutinas personales.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
