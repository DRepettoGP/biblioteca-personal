# API REST

Base local: `http://localhost:3001/api/v1`

Base en producción: `/api/v1`

## GET /books

Devuelve todos los libros.

Respuesta `200`:

```json
[
  {
    "id": "1",
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "status": "read",
    "rating": 5,
    "notes": "Una lectura breve con muchas capas de significado.",
    "createdAt": "2026-05-25T00:00:00.000Z",
    "updatedAt": "2026-05-25T00:00:00.000Z"
  }
]
```

## GET /books/:id

Devuelve un libro por id.

- `200`: libro encontrado.
- `404`: libro no encontrado.

## POST /books

Crea un libro.

Request:

```json
{
  "title": "Dune",
  "author": "Frank Herbert",
  "status": "pending",
  "rating": 4,
  "notes": "Ciencia ficción clásica."
}
```

Respuesta `201`: libro creado.

## PUT /books/:id

Actualiza un libro completo.

- `200`: libro actualizado.
- `400`: datos inválidos.
- `404`: libro no encontrado.

## DELETE /books/:id

Elimina un libro.

- `204`: eliminado correctamente.
- `404`: libro no encontrado.

## Errores

```json
{
  "message": "El título es obligatorio."
}
```
