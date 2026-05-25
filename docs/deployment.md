# Despliegue

## Plataforma

El proyecto está preparado para desplegar frontend y backend en Vercel desde el mismo repositorio.

## Configuración

`vercel.json` define:

- Build del frontend con `npm run build`.
- Salida del frontend en `dist`.
- Rewrites para enviar `/api/*` a la función serverless.
- Rewrites para rutas del frontend hacia `index.html`.

## Pasos

1. Subir el código a GitHub: https://github.com/DRepettoGP/biblioteca-personal
2. Entrar en Vercel.
3. Importar el repositorio.
4. Mantener `npm run build` como build command.
5. Mantener `dist` como output directory.
6. Añadir `VITE_API_URL=/api/v1` si se desea configurar explícitamente.
7. Desplegar.
8. Probar `/` y `/api/v1/books` en producción.
9. Añadir las URLs finales al `README.md`.

## URLs

- Frontend: pendiente.
- API: pendiente.
