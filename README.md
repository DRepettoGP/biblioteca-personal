# NextChapter

NextChapter es una aplicación fullstack para organizar una biblioteca personal. Permite registrar libros, buscar por título o autor, filtrar por estado de lectura y gestionar altas, ediciones y eliminaciones desde una API REST.

## Enlaces

- Repositorio GitHub: https://github.com/DRepettoGP/biblioteca-personal
- Tablero Trello: https://trello.com/b/MIkiXKvw/mi-tablero-de-trello
- Frontend en Vercel: pendiente de añadir tras el despliegue
- API en Vercel: pendiente de añadir tras el despliegue

## Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Node.js
- Express
- Vite
- Vercel

## Scripts

```bash
npm install
npm run dev
npm run dev:server
npm run dev:full
npm run build
```

## API

La API vive bajo `/api/v1`.

- `GET /api/v1/books`
- `GET /api/v1/books/:id`
- `POST /api/v1/books`
- `PUT /api/v1/books/:id`
- `DELETE /api/v1/books/:id`

## Despliegue

El repositorio está preparado para Vercel con `vercel.json`. El frontend se compila en `dist` y la API se publica desde `api/index.ts`, reutilizando la app Express ubicada en `server/src/config/app.ts`.
