---
name: postgres-database-best-practices
description: Diseña y audita el modelo PostgreSQL y las migraciones Flyway del MVP inmobiliario, preservando integridad, rendimiento, reversibilidad operacional y seguridad de datos.
---

# Principios

- Cada cambio de esquema requiere una migración versionada.
- Una migración aplicada es inmutable; crear otra para corregirla.
- Usar constraints, foreign keys, índices y tipos adecuados.
- UUID para identidad pública; no confiar en slugs como identidad.
- `numeric` para dinero, `timestamptz` para tiempo.
- Soft delete solo si existe requisito; no agregarlo por defecto.
- Estados mediante enum de aplicación más constraint o tabla cuando necesite evolución.

# Rendimiento

- Indexar filtros reales: status, operation_type, property_type, city, price y published_at.
- Índices compuestos deben responder a consultas observadas.
- Toda lista debe paginarse con orden estable.
- Revisar planes antes de agregar índices especulativos.

# Migraciones seguras

Para columnas obligatorias: añadir nullable, poblar, validar y finalmente restringir. Evitar bloqueos prolongados y operaciones destructivas sin respaldo y plan de recuperación.

# Privacidad

Separar campos públicos de dirección exacta y coordenadas privadas. Restringir acceso desde la aplicación, no solo desde la interfaz.
