export type ReadingStatus = 'pending' | 'reading' | 'read';

export interface Book {
  id: string;
  title: string;
  author: string;
  status: ReadingStatus;
  rating: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookInput {
  title: string;
  author: string;
  status: ReadingStatus;
  rating: number;
  notes: string;
}

export interface ApiErrorResponse {
  message: string;
}
