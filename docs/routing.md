# Rutas y navegación

La navegación se implementa con React Router.

## Rutas

- `/`: página principal de biblioteca.
- `/about`: página informativa del proyecto.
- `*`: página 404 para rutas no existentes.

## Layout

`Layout` contiene la navegación común y renderiza el contenido con `Outlet`.

## Lazy loading

Las páginas `AboutPage` y `NotFoundPage` se cargan con `React.lazy` para aplicar carga diferida como mejora bonus.
