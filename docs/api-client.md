# Cliente API tipado

El cliente API está en `src/api/client.ts`.

## Responsabilidad

Centraliza las llamadas HTTP con `fetch`, construye las URLs, gestiona errores y devuelve datos tipados.

## Tipos

Los tipos principales están en `src/types/book.ts`:

- `ReadingStatus`.
- `Book`.
- `BookInput`.
- `ApiErrorResponse`.

## Fuente de verdad

Los libros viven en la API. El frontend no usa LocalStorage para estos datos. Cuando se crea, actualiza o elimina un libro, la operación pasa por el backend.

## Estados de red

La UI gestiona:

- Loading: muestra mensaje de carga.
- Success: muestra datos.
- Error: muestra mensaje y botón de reintento.

## Variable de entorno

`VITE_API_URL` permite cambiar la base de la API. En producción se puede usar `/api/v1` para consumir la API del mismo despliegue en Vercel.
