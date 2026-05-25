# Context API

## Uso en NextChapter

La aplicación crea `LibraryContext` para compartir el estado de biblioteca entre componentes sin pasar props por muchos niveles.

## Provider

`LibraryProvider` carga los libros desde la API, guarda estados de red y expone funciones para crear, editar, eliminar y refrescar libros.

## Consumo

Los componentes consumen el contexto mediante el hook `useLibrary`. Si se usa fuera del provider, lanza un error claro.

## Cuándo es útil Context API

Context API es útil cuando varios componentes necesitan acceder a la misma información global, por ejemplo usuario autenticado, tema visual, idioma o datos compartidos como la biblioteca.

En este proyecto evita pasar manualmente `books`, `loading`, `error` y funciones de modificación desde la raíz hasta cada componente.
