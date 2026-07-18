---
name: testing-and-quality-gates
description: Define y aplica la estrategia de pruebas y quality gates del MVP inmobiliario en frontend, backend, API, base de datos y flujos E2E.
---

# Pirámide práctica

- Muchas pruebas unitarias para reglas puras.
- Integración para persistencia, seguridad, API y componentes.
- Pocas E2E para recorridos críticos.

# Flujos críticos

1. Login y cierre de sesión del administrador.
2. Crear y editar propiedad.
3. Cargar, ordenar y eliminar imágenes.
4. Publicar y despublicar.
5. Ver solo propiedades publicadas.
6. Filtrar y paginar.
7. Enviar contacto.
8. Ocultar ubicación exacta.

# Reglas

- Cada bug corregido debe incluir prueba de regresión cuando sea viable.
- No usar mocks para aquello que se necesita validar realmente, como SQL, seguridad o serialización.
- Pruebas deterministas, independientes y sin depender de servicios productivos.
- Evitar assertions frágiles sobre timestamps, orden JSON o textos internos.
- No desactivar pruebas para lograr verde.

# Quality gates

Frontend: lint, typecheck, tests y build. Backend: test, check y build. Infraestructura: validar Compose y health checks.
