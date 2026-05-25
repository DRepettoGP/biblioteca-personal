# Diseño y arquitectura

## Estructura principal

El proyecto se divide en frontend y backend dentro del mismo repositorio.

Frontend:

- `src/components`: componentes reutilizables.
- `src/pages`: páginas de React Router.
- `src/hooks`: hooks reutilizables.
- `src/types`: contratos TypeScript.
- `src/utils`: utilidades.
- `src/context`: estado global.
- `src/api`: cliente HTTP tipado.

Backend:

- `server/src/routes`: definición de rutas REST.
- `server/src/controllers`: entrada HTTP y respuestas.
- `server/src/services`: lógica de negocio.
- `server/src/config`: configuración de Express.
- `server/src/validators`: validación en la frontera de red.

## Componentes principales

- `Layout`: estructura común, cabecera y navegación.
- `LibraryPage`: página principal de gestión de libros.
- `BookForm`: formulario controlado para crear y editar.
- `BookCard`: tarjeta reutilizable para mostrar un libro.
- `StatCard`: resumen visual de métricas.

## Estado

El estado global se gestiona con Context API en `LibraryContext`. Guarda la lista de libros, filtros, búsqueda, estado de carga y error. Los cálculos de estadísticas y filtrado usan `useMemo` para evitar trabajo innecesario.

## API REST

Base: `/api/v1`

- `GET /books`: devuelve todos los libros.
- `GET /books/:id`: devuelve un libro concreto.
- `POST /books`: crea un libro.
- `PUT /books/:id`: actualiza un libro completo.
- `DELETE /books/:id`: elimina un libro.

## Contrato de datos

```ts
type ReadingStatus = 'pending' | 'reading' | 'read';

interface Book {
  id: string;
  title: string;
  author: string;
  status: ReadingStatus;
  rating: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}
```

## Persistencia

Los libros viven en el backend como fuente de verdad. En esta versión se guardan en memoria del servidor, por lo que Vercel puede reiniciar los datos entre ejecuciones. El frontend no usa LocalStorage para los libros.

## Flujo de datos

```text
Usuario
  ↓
React UI
  ↓
Cliente API tipado: src/api/client.ts
  ↓
Express API: /api/v1/books
  ↓
Routes → Controllers → Services
  ↓
Respuesta JSON
  ↓
Context API actualiza la interfaz
```
