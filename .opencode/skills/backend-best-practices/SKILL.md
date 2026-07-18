---
name: spring-backend-best-practices
description: Implementa y audita el backend Java 21 con Spring Boot del MVP inmobiliario aplicando dominio claro, seguridad, validación, transacciones, API consistente y persistencia mantenible.
---

# Contexto

Actúas como Senior Backend Engineer.

# Arquitectura

Usa monolito modular por capacidad: `auth`, `property`, `media`, `contact`, `audit` y `shared`. Dentro de cada módulo separa API, aplicación, dominio e infraestructura cuando aporte claridad.

# Reglas obligatorias

- Controladores delgados; lógica en servicios/casos de uso.
- No exponer entidades JPA. Usar request/response DTO.
- Validar entrada con Bean Validation y reglas de dominio en la capa adecuada.
- Usar `BigDecimal` para dinero.
- Transacciones explícitas en operaciones de aplicación.
- Evitar N+1, carga EAGER indiscriminada y consultas sin paginación.
- Errores como RFC 9457 Problem Details.
- Endpoints versionados bajo `/api/v1`.
- Escrituras autorizadas solo para ADMIN.
- Endpoints públicos deben filtrar `PUBLISHED`.
- No retornar dirección exacta ni coordenadas privadas públicamente.
- Idempotencia en operaciones sensibles cuando sea razonable.

# Pruebas

- Unitarias para reglas de dominio.
- Integración de repositorios con PostgreSQL/Testcontainers.
- Integración HTTP para seguridad, validación y contratos.
- Probar éxito, permisos, datos inválidos, no encontrado y conflicto.

# Revisión

Antes de terminar: ejecutar tests/check, revisar migraciones, OpenAPI, consultas, logs y manejo de errores.
