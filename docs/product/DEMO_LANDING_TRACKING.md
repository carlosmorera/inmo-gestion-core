# Seguimiento - Landing inmobiliaria de demostración

## Objetivo

Construir una landing inmobiliaria premium ficticia para presentar a clientes mediante un enlace temporal de Cloudflare. La entrega debe ser atractiva, responsive, accesible y explícita sobre el carácter demostrativo de propiedades, ubicaciones y testimonios.

## Estado general

- Fase actual: Preparación del repositorio.
- Rama de trabajo: `feature/real-estate-demo-landing`.
- Última actualización: 2026-07-18.
- Publicación objetivo: Cloudflare Quick Tunnel sobre Nginx y Docker Compose.

## Cómo actualizar este documento

- Usar `[ ]` para tareas pendientes y `[x]` solo cuando la tarea esté implementada y validada.
- Añadir fecha de finalización y evidencia verificable al completar cada tarea.
- Registrar bloqueos sin marcar la tarea como completada.
- Mantener las decisiones relevantes en la sección correspondiente.
- No considerar terminada una fase mientras sus validaciones obligatorias estén pendientes.

## 1. Repositorio y planificación

- [x] `GIT-001` Crear y publicar el commit inicial en `main`. Fecha: 2026-07-18. Evidencia: commit `50df943`.
- [x] `GIT-002` Crear la rama `feature/real-estate-demo-landing`. Fecha: 2026-07-18. Evidencia: rama local activa.
- [x] `DOC-001` Crear el documento de seguimiento del proyecto. Fecha: 2026-07-18. Evidencia: `docs/product/DEMO_LANDING_TRACKING.md`.
- [ ] `DOC-002` Documentar instrucciones locales de instalación, desarrollo y despliegue. Fecha: pendiente. Evidencia: `README.md`.
- [ ] `DOC-003` Registrar fuentes y licencias de las fotografías stock. Fecha: pendiente. Evidencia: `docs/product/IMAGE_SOURCES.md`.

## 2. Base técnica del frontend

- [ ] `WEB-001` Crear `apps/web` con Next.js 16, App Router y TypeScript estricto. Fecha: pendiente. Evidencia: `apps/web`.
- [ ] `WEB-002` Configurar Tailwind CSS y los estilos globales. Fecha: pendiente. Evidencia: `apps/web/app/globals.css`.
- [ ] `WEB-003` Configurar exportación estática de producción. Fecha: pendiente. Evidencia: `apps/web/next.config.ts`.
- [ ] `WEB-004` Añadir scripts de lint, typecheck, test y build. Fecha: pendiente. Evidencia: `apps/web/package.json`.
- [ ] `WEB-005` Centralizar identidad, contacto y textos configurables de la marca ficticia. Fecha: pendiente. Evidencia: `apps/web/data/brand.ts`.

## 3. Identidad y contenido

- [ ] `BRAND-001` Definir nombre, logotipo tipográfico, paleta y tipografías de la marca premium ficticia. Fecha: pendiente. Evidencia: componentes y estilos del frontend.
- [ ] `CONTENT-001` Redactar propuesta de valor, beneficios y llamados a la acción. Fecha: pendiente. Evidencia: página principal.
- [ ] `CONTENT-002` Crear al menos seis propiedades ficticias coherentes. Fecha: pendiente. Evidencia: `apps/web/data/properties.ts`.
- [ ] `CONTENT-003` Evitar direcciones exactas, coordenadas y datos personales en todo contenido público. Fecha: pendiente. Evidencia: revisión de datos y renderizado.
- [ ] `CONTENT-004` Identificar discretamente propiedades, ubicaciones y testimonios como demostrativos. Fecha: pendiente. Evidencia: página principal y pie de página.

## 4. Imágenes inmobiliarias

- [ ] `MEDIA-001` Seleccionar fotografías stock realistas con licencia compatible. Fecha: pendiente. Evidencia: `docs/product/IMAGE_SOURCES.md`.
- [ ] `MEDIA-002` Configurar dimensiones, formatos y carga responsive de imágenes. Fecha: pendiente. Evidencia: componentes que usan `next/image`.
- [ ] `MEDIA-003` Escribir textos alternativos según la función de cada imagen. Fecha: pendiente. Evidencia: revisión de componentes.
- [ ] `MEDIA-004` Verificar que ninguna imagen exponga matrículas, direcciones o datos sensibles. Fecha: pendiente. Evidencia: checklist de revisión visual.

## 5. Experiencia de la landing

- [ ] `UI-001` Implementar navegación y hero principal. Fecha: pendiente. Evidencia: componentes de encabezado y hero.
- [ ] `UI-002` Implementar buscador visual no funcional y aclarar su carácter demostrativo. Fecha: pendiente. Evidencia: sección de búsqueda.
- [ ] `UI-003` Implementar catálogo de propiedades destacadas. Fecha: pendiente. Evidencia: componentes de catálogo y tarjetas.
- [ ] `UI-004` Implementar servicios, proceso comercial y señales de confianza. Fecha: pendiente. Evidencia: secciones de la página principal.
- [ ] `UI-005` Implementar testimonios demostrativos y preguntas frecuentes. Fecha: pendiente. Evidencia: secciones de testimonios y FAQ.
- [ ] `UI-006` Implementar CTA de WhatsApp configurable con mensaje prellenado. Fecha: pendiente. Evidencia: componente CTA y `.env.example`.
- [ ] `UI-007` Evitar enlaces inválidos cuando WhatsApp no esté configurado. Fecha: pendiente. Evidencia: prueba automatizada o revisión del estado alternativo.

## 6. Mapa ficticio

- [ ] `MAP-001` Diseñar un mapa urbano ficticio con SVG y CSS locales. Fecha: pendiente. Evidencia: componente y asset del mapa.
- [ ] `MAP-002` Asociar entre cinco y seis marcadores con propiedades simuladas. Fecha: pendiente. Evidencia: datos y componente del mapa.
- [ ] `MAP-003` Mostrar claramente la leyenda “Ubicaciones aproximadas”. Fecha: pendiente. Evidencia: sección del mapa.
- [ ] `MAP-004` Permitir seleccionar marcadores con ratón y teclado. Fecha: pendiente. Evidencia: prueba de interacción.
- [ ] `MAP-005` Mostrar una tarjeta resumida de la propiedad seleccionada. Fecha: pendiente. Evidencia: componente del mapa.
- [ ] `MAP-006` Mantener contenido útil cuando JavaScript esté deshabilitado. Fecha: pendiente. Evidencia: prueba manual sin JavaScript.
- [ ] `MAP-007` Adaptar el mapa y sus tarjetas a pantallas móviles sin desbordamiento horizontal. Fecha: pendiente. Evidencia: revisión responsive.

## 7. Accesibilidad, SEO y privacidad

- [ ] `A11Y-001` Implementar estructura semántica, skip link y jerarquía correcta de encabezados. Fecha: pendiente. Evidencia: revisión del HTML renderizado.
- [ ] `A11Y-002` Garantizar navegación completa por teclado y foco visible. Fecha: pendiente. Evidencia: prueba manual y automatizada.
- [ ] `A11Y-003` Respetar `prefers-reduced-motion`. Fecha: pendiente. Evidencia: estilos y prueba manual.
- [ ] `A11Y-004` Verificar contraste y tamaños táctiles. Fecha: pendiente. Evidencia: auditoría de accesibilidad.
- [ ] `SEO-001` Configurar metadata y Open Graph para la demostración. Fecha: pendiente. Evidencia: `apps/web/app/layout.tsx`.
- [ ] `SEO-002` Configurar `noindex, nofollow` para propiedades ficticias y URL temporal. Fecha: pendiente. Evidencia: metadata y `apps/web/app/robots.ts`.
- [ ] `SEC-001` Confirmar que no se publican secretos, certificados, coordenadas ni datos personales. Fecha: pendiente. Evidencia: revisión del artefacto estático y del contenedor.

## 8. Contenedores y publicación temporal

- [ ] `INFRA-001` Crear Dockerfile multi-stage para construir Next.js y servir solo `out/` con Nginx. Fecha: pendiente. Evidencia: `apps/web/Dockerfile`.
- [ ] `INFRA-002` Configurar Nginx con 404 reales, compresión, caché y headers de seguridad. Fecha: pendiente. Evidencia: `infra/nginx/default.conf`.
- [ ] `INFRA-003` Crear Docker Compose con Nginx y Cloudflare Quick Tunnel. Fecha: pendiente. Evidencia: `compose.yaml`.
- [ ] `INFRA-004` Fijar versiones reproducibles de las imágenes de contenedor. Fecha: pendiente. Evidencia: Dockerfile y Compose.
- [ ] `INFRA-005` Añadir healthcheck y permisos mínimos razonables. Fecha: pendiente. Evidencia: Dockerfile y Compose.
- [ ] `DEPLOY-001` Construir y levantar los contenedores localmente. Fecha: pendiente. Evidencia: salida de Compose.
- [ ] `DEPLOY-002` Obtener y verificar la URL temporal de Cloudflare. Fecha: pendiente. Evidencia: URL y smoke test.

## 9. Pruebas y cierre

- [ ] `QA-001` Ejecutar lint sin errores. Fecha: pendiente. Evidencia: `npm run lint`.
- [ ] `QA-002` Ejecutar typecheck sin errores. Fecha: pendiente. Evidencia: `npm run typecheck`.
- [ ] `QA-003` Ejecutar pruebas automatizadas. Fecha: pendiente. Evidencia: `npm test`.
- [ ] `QA-004` Generar el build de producción. Fecha: pendiente. Evidencia: `npm run build`.
- [ ] `QA-005` Validar la configuración de Docker Compose. Fecha: pendiente. Evidencia: `docker compose config`.
- [ ] `QA-006` Construir las imágenes de Docker. Fecha: pendiente. Evidencia: `docker compose build`.
- [ ] `QA-007` Revisar 320, 375, 768, 1024 y 1440 px. Fecha: pendiente. Evidencia: checklist o capturas.
- [ ] `QA-008` Verificar teclado, movimiento reducido y JavaScript deshabilitado. Fecha: pendiente. Evidencia: checklist de accesibilidad.
- [ ] `QA-009` Verificar headers, 404, assets públicos y ausencia de archivos sensibles. Fecha: pendiente. Evidencia: smoke tests HTTP.
- [ ] `REVIEW-001` Revisar la demostración con el cliente y registrar comentarios. Fecha: pendiente. Evidencia: notas de revisión.

## Decisiones

- 2026-07-18: La landing será una demostración, no el portal inmobiliario funcional completo.
- 2026-07-18: Se utilizará una marca premium ficticia y reemplazable.
- 2026-07-18: Las fotografías serán stock con licencia documentada.
- 2026-07-18: El mapa será ficticio, local y sin APIs cartográficas.
- 2026-07-18: La publicación inicial usará Nginx, Docker Compose y Cloudflare Quick Tunnel.
- 2026-07-18: La URL temporal y los datos ficticios no se indexarán.

## Bloqueos

- Falta definir un número o URL real de WhatsApp para activar el CTA externo.
- El Quick Tunnel cambia de URL cuando se reinicia; no es una publicación permanente.

## Historial de entregas

| Fecha | Entrega | Commit | Resultado |
|---|---|---|---|
| 2026-07-18 | Gobernanza inicial del repositorio | `50df943` | Publicada en `origin/main` |
