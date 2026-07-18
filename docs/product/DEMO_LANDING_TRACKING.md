# Seguimiento - Landing inmobiliaria de demostración

## Objetivo

Construir una landing inmobiliaria premium ficticia para presentar a clientes mediante un enlace temporal de Cloudflare. La entrega debe ser atractiva, responsive, accesible y explícita sobre el carácter demostrativo de propiedades, ubicaciones y testimonios.

## Estado general

- Fase actual: Demo temporal disponible; pendiente de revisión con cliente.
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
- [x] `DOC-002` Documentar instrucciones locales de instalación, desarrollo y despliegue. Fecha: 2026-07-18. Evidencia: `README.md`.
- [x] `DOC-003` Registrar fuentes y licencias de las fotografías stock. Fecha: 2026-07-18. Evidencia: `docs/product/IMAGE_SOURCES.md`.

## 2. Base técnica del frontend

- [x] `WEB-001` Crear `apps/web` con Next.js 16, App Router y TypeScript estricto. Fecha: 2026-07-18. Evidencia: `apps/web`.
- [x] `WEB-002` Configurar Tailwind CSS y los estilos globales. Fecha: 2026-07-18. Evidencia: `apps/web/app/globals.css`.
- [x] `WEB-003` Configurar exportación estática de producción. Fecha: 2026-07-18. Evidencia: `apps/web/next.config.ts` y `npm run build`.
- [x] `WEB-004` Añadir scripts de lint, typecheck, test y build. Fecha: 2026-07-18. Evidencia: `apps/web/package.json`.
- [x] `WEB-005` Centralizar identidad, contacto y textos configurables de la marca ficticia. Fecha: 2026-07-18. Evidencia: `apps/web/data/brand.ts`.

## 3. Identidad y contenido

- [x] `BRAND-001` Definir nombre, logotipo tipográfico, paleta y tipografías de la marca premium ficticia. Fecha: 2026-07-18. Evidencia: `apps/web/app/page.tsx` y `apps/web/app/globals.css`.
- [x] `CONTENT-001` Redactar propuesta de valor, beneficios y llamados a la acción. Fecha: 2026-07-18. Evidencia: `apps/web/app/page.tsx`.
- [x] `CONTENT-002` Crear al menos seis propiedades ficticias coherentes. Fecha: 2026-07-18. Evidencia: `apps/web/data/properties.ts`.
- [x] `CONTENT-003` Evitar direcciones exactas, coordenadas y datos personales en todo contenido público. Fecha: 2026-07-18. Evidencia: revisión de datos y renderizado público.
- [x] `CONTENT-004` Identificar discretamente propiedades, ubicaciones y testimonios como demostrativos. Fecha: 2026-07-18. Evidencia: página principal, FAQ y pie de página.

## 4. Imágenes inmobiliarias

- [x] `MEDIA-001` Seleccionar fotografías stock realistas con licencia compatible. Fecha: 2026-07-18. Evidencia: `docs/product/IMAGE_SOURCES.md`.
- [x] `MEDIA-002` Configurar dimensiones, formatos y carga responsive de imágenes. Fecha: 2026-07-18. Evidencia: `image-loader.ts` y componentes que usan `next/image`.
- [x] `MEDIA-003` Escribir textos alternativos según la función de cada imagen. Fecha: 2026-07-18. Evidencia: revisión de componentes y Lighthouse.
- [x] `MEDIA-004` Verificar que ninguna imagen exponga matrículas, direcciones o datos sensibles. Fecha: 2026-07-18. Evidencia: revisión visual en cinco tamaños.

## 5. Experiencia de la landing

- [x] `UI-001` Implementar navegación y hero principal. Fecha: 2026-07-18. Evidencia: `apps/web/app/page.tsx`.
- [x] `UI-002` Implementar buscador visual no funcional y aclarar su carácter demostrativo. Fecha: 2026-07-18. Evidencia: sección de búsqueda.
- [x] `UI-003` Implementar catálogo de propiedades destacadas. Fecha: 2026-07-18. Evidencia: `apps/web/components/property-card.tsx`.
- [x] `UI-004` Implementar servicios, proceso comercial y señales de confianza. Fecha: 2026-07-18. Evidencia: secciones de la página principal.
- [x] `UI-005` Implementar testimonios demostrativos y preguntas frecuentes. Fecha: 2026-07-18. Evidencia: secciones de testimonios y FAQ.
- [x] `UI-006` Implementar CTA de WhatsApp configurable con mensaje prellenado. Fecha: 2026-07-18. Evidencia: `apps/web/data/brand.ts` y `.env.example`.
- [x] `UI-007` Evitar enlaces inválidos cuando WhatsApp no esté configurado. Fecha: 2026-07-18. Evidencia: `apps/web/data/brand.test.ts` y estado deshabilitado.

## 6. Mapa ficticio

- [x] `MAP-001` Diseñar un mapa urbano ficticio con SVG y CSS locales. Fecha: 2026-07-18. Evidencia: `apps/web/components/property-map.tsx`.
- [x] `MAP-002` Asociar entre cinco y seis marcadores con propiedades simuladas. Fecha: 2026-07-18. Evidencia: `apps/web/data/properties.ts` y componente del mapa.
- [x] `MAP-003` Mostrar claramente la leyenda “Ubicaciones aproximadas”. Fecha: 2026-07-18. Evidencia: sección del mapa.
- [x] `MAP-004` Permitir seleccionar marcadores con ratón y teclado. Fecha: 2026-07-18. Evidencia: `apps/web/components/property-map.test.tsx`.
- [x] `MAP-005` Mostrar una tarjeta resumida de la propiedad seleccionada. Fecha: 2026-07-18. Evidencia: componente y prueba del mapa.
- [x] `MAP-006` Mantener contenido útil cuando JavaScript esté deshabilitado. Fecha: 2026-07-18. Evidencia: HTML prerenderizado, catálogo y aviso `noscript`.
- [x] `MAP-007` Adaptar el mapa y sus tarjetas a pantallas móviles sin desbordamiento horizontal. Fecha: 2026-07-18. Evidencia: estilos responsive y revisión visual.

## 7. Accesibilidad, SEO y privacidad

- [x] `A11Y-001` Implementar estructura semántica, skip link y jerarquía correcta de encabezados. Fecha: 2026-07-18. Evidencia: HTML prerenderizado y Lighthouse.
- [x] `A11Y-002` Garantizar navegación completa por teclado y foco visible. Fecha: 2026-07-18. Evidencia: estados `focus-visible`, controles nativos y prueba del mapa.
- [x] `A11Y-003` Respetar `prefers-reduced-motion`. Fecha: 2026-07-18. Evidencia: `apps/web/app/globals.css`.
- [x] `A11Y-004` Verificar contraste y tamaños táctiles. Fecha: 2026-07-18. Evidencia: Lighthouse Accessibility 100.
- [x] `SEO-001` Configurar metadata y Open Graph para la demostración. Fecha: 2026-07-18. Evidencia: `apps/web/app/layout.tsx`.
- [x] `SEO-002` Configurar `noindex, nofollow` para propiedades ficticias y URL temporal. Fecha: 2026-07-18. Evidencia: metadata, `apps/web/app/robots.ts` y smoke test público.
- [x] `SEC-001` Confirmar que no se publican secretos, certificados, coordenadas ni datos personales. Fecha: 2026-07-18. Evidencia: inspección del contenedor y smoke tests HTTP.

## 8. Contenedores y publicación temporal

- [x] `INFRA-001` Crear Dockerfile multi-stage para construir Next.js y servir solo `out/` con Nginx. Fecha: 2026-07-18. Evidencia: `apps/web/Dockerfile`.
- [x] `INFRA-002` Configurar Nginx con 404 reales, compresión, caché y headers de seguridad. Fecha: 2026-07-18. Evidencia: `infra/nginx/default.conf` y smoke tests.
- [x] `INFRA-003` Crear Docker Compose con Nginx y Cloudflare Quick Tunnel. Fecha: 2026-07-18. Evidencia: `compose.yaml`.
- [x] `INFRA-004` Fijar versiones reproducibles de las imágenes de contenedor. Fecha: 2026-07-18. Evidencia: Dockerfile y Compose.
- [x] `INFRA-005` Añadir healthcheck y permisos mínimos razonables. Fecha: 2026-07-18. Evidencia: contenedores sin privilegios y servicio `web` saludable.
- [x] `DEPLOY-001` Construir y levantar los contenedores localmente. Fecha: 2026-07-18. Evidencia: `docker compose build` y `docker compose up -d --wait`.
- [x] `DEPLOY-002` Obtener y verificar la URL temporal de Cloudflare. Fecha: 2026-07-18. Evidencia: `https://nancy-administrative-speaker-each.trycloudflare.com` y smoke tests.

## 9. Pruebas y cierre

- [x] `QA-001` Ejecutar lint sin errores. Fecha: 2026-07-18. Evidencia: `npm run lint`.
- [x] `QA-002` Ejecutar typecheck sin errores. Fecha: 2026-07-18. Evidencia: `npm run typecheck`.
- [x] `QA-003` Ejecutar pruebas automatizadas. Fecha: 2026-07-18. Evidencia: `npm test`, cuatro pruebas aprobadas.
- [x] `QA-004` Generar el build de producción. Fecha: 2026-07-18. Evidencia: `npm run build`.
- [x] `QA-005` Validar la configuración de Docker Compose. Fecha: 2026-07-18. Evidencia: `docker compose config`.
- [x] `QA-006` Construir las imágenes de Docker. Fecha: 2026-07-18. Evidencia: `docker compose build`.
- [x] `QA-007` Revisar 320, 375, 768, 1024 y 1440 px. Fecha: 2026-07-18. Evidencia: capturas revisadas con Chrome Headless.
- [x] `QA-008` Verificar teclado, movimiento reducido y JavaScript deshabilitado. Fecha: 2026-07-18. Evidencia: controles nativos, prueba automatizada, CSS y HTML prerenderizado.
- [x] `QA-009` Verificar headers, 404, assets públicos y ausencia de archivos sensibles. Fecha: 2026-07-18. Evidencia: smoke tests públicos y revisión del contenedor.
- [ ] `REVIEW-001` Revisar la demostración con el cliente y registrar comentarios. Fecha: pendiente. Evidencia: notas de revisión.

## 10. Optimización para Raspberry Pi

- [x] `RPI-001` Confirmar variantes ARM64 en Node, Nginx y cloudflared. Fecha: 2026-07-18. Evidencia: manifiestos OCI de las imágenes fijadas.
- [x] `RPI-002` Reducir la imagen web mediante Nginx oficial `alpine-slim`. Fecha: 2026-07-18. Evidencia: reducción de 54,8 MB a 13,5 MB.
- [x] `RPI-003` Ejecutar Nginx y cloudflared sin privilegios, con filesystem de solo lectura y límites de CPU, RAM y procesos. Fecha: 2026-07-18. Evidencia: `compose.yaml` y contenedores saludables.
- [x] `RPI-004` Validar límites con 2.000 solicitudes locales consecutivas. Fecha: 2026-07-18. Evidencia: Nginx por debajo de 3 MiB y cloudflared alrededor de 15,5 MiB.
- [x] `RPI-005` Documentar despliegue, medición y mantenimiento de disco para Raspberry Pi. Fecha: 2026-07-18. Evidencia: `docs/operations/RASPBERRY_PI.md`.

## Decisiones

- 2026-07-18: La landing será una demostración, no el portal inmobiliario funcional completo.
- 2026-07-18: Se utilizará una marca premium ficticia y reemplazable.
- 2026-07-18: Las fotografías serán stock con licencia documentada.
- 2026-07-18: El mapa será ficticio, local y sin APIs cartográficas.
- 2026-07-18: La publicación inicial usará Nginx, Docker Compose y Cloudflare Quick Tunnel.
- 2026-07-18: La URL temporal y los datos ficticios no se indexarán.
- 2026-07-18: La demostración se contextualiza exclusivamente para Bogotá, Colombia, con sectores aproximados y propiedades ficticias.
- 2026-07-18: El HTML temporal debe revalidarse en cada visita; solo los assets versionados conservan caché prolongada.
- 2026-07-18: El despliegue de Raspberry Pi requiere ARM64; Nginx usa una imagen slim y los servicios tienen límites medidos de CPU, memoria y procesos.

## Bloqueos

- Falta definir un número o URL real de WhatsApp para activar el CTA externo.
- El Quick Tunnel cambia de URL cuando se reinicia; no es una publicación permanente.

## Historial de entregas

| Fecha | Entrega | Commit | Resultado |
|---|---|---|---|
| 2026-07-18 | Gobernanza inicial del repositorio | `50df943` | Publicada en `origin/main` |
| 2026-07-18 | Landing inmobiliaria, mapa y despliegue temporal | `0e4f974` | Publicada en la rama de feature |
| 2026-07-18 | Adaptación del catálogo y contenido para Bogotá | `213f3c9` | Publicada en la rama de feature |
| 2026-07-18 | Corrección de caché para evitar HTML obsoleto | `ec6c00d` | Publicada y verificada en un túnel nuevo |
| 2026-07-18 | Optimización de contenedores para Raspberry Pi ARM64 | `0b10f53` | Publicada y validada bajo carga local |
