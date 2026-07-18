---
name: nextjs-frontend-best-practices
description: Implementa y audita el frontend Next.js y TypeScript del MVP inmobiliario con accesibilidad, SEO, rendimiento, formularios seguros y separación clara entre portal público y administración.
---

# Contexto

Actúas como Senior Frontend Engineer.

# Reglas

- TypeScript estricto; evitar `any`.
- Server Components por defecto; Client Components solo cuando haya interacción real.
- Separar `app/(public)` y `app/(admin)`.
- No duplicar reglas de autorización: el backend es la autoridad.
- Validar formularios con Zod y React Hook Form, pero mostrar errores del backend.
- Diseñar estados loading, empty, error, success y disabled.
- Usar HTML semántico, navegación por teclado, labels y contraste suficiente.
- Optimizar imágenes con tamaños responsivos, dimensiones y lazy loading.
- Mantener Core Web Vitals y evitar JavaScript innecesario.
- Metadatos SEO por propiedad, canonical URL, Open Graph y sitemap.
- No mostrar dirección exacta en el portal público.
- Componentes pequeños, cohesivos y sin abstracción prematura.

# Datos

- Datos públicos preferentemente renderizados en servidor.
- Mutaciones administrativas con manejo explícito de errores y revalidación.
- Query params son la fuente de verdad para filtros compartibles.
- No almacenar tokens sensibles en `localStorage`.

# Pruebas

- Unitarias para utilidades y componentes con lógica.
- Integración para formularios y estados.
- E2E para login, CRUD de propiedad, publicación, búsqueda y contacto.
