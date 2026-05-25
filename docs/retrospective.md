# Retrospectiva final

## Qué aprendí

Durante este proyecto se conecta un frontend moderno con React y TypeScript con un backend Express organizado por capas. También se practica la creación de un cliente API tipado y el uso de estados de red en la interfaz.

## Conexión frontend-backend

El frontend no accede directamente a datos locales para la biblioteca. Usa `src/api/client.ts`, que llama a los endpoints REST del backend. El backend valida la entrada, ejecuta la lógica en servicios y devuelve JSON.

## Problemas encontrados

Los puntos más importantes a vigilar son la alineación de tipos entre frontend y backend, la gestión de errores HTTP y la configuración de Vercel para servir frontend y API desde el mismo despliegue.

## Uso de IA

La IA se utilizó como asistente para planificar la estructura, generar documentación, proponer una arquitectura por capas, crear componentes reutilizables y preparar la configuración de despliegue. El criterio humano sigue siendo necesario para revisar, probar y adaptar el resultado final.

## Reflexión

NextChapter demuestra cómo una aplicación pequeña puede seguir buenas prácticas profesionales: separación de responsabilidades, documentación, tipos compartidos conceptualmente, rutas claras, validación y una experiencia de usuario sencilla.
