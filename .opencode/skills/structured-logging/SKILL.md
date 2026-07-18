---
name: structured-logging
description: Audita y genera logs estructurados siguiendo buenas prácticas de observabilidad, trazabilidad y Canonical Log Lines. Úsalo para revisar logs, mejorar observabilidad, propagar correlación o instrumentar operaciones críticas.
---

# Objetivo

Producir logs consultables, consistentes y útiles para operación sin exponer datos sensibles.

# Convenciones

- Emitir JSON estructurado, no texto concatenado.
- Usar nombres estables en dot notation: `property.created`, `property.published`, `media.upload.failed`.
- Campos recomendados: `event.name`, `service.name`, `log.level`, `request.id`, `correlation.id`, `trace.id`, `span.id`, `operation.duration_ms`, `result.status`.
- Conservar un correlation ID entrante válido o generar uno.
- Propagar contexto por HTTP y tareas asíncronas.
- Una Canonical Log Line al final de cada operación importante, evitando duplicidad.
- Errores con tipo, código estable y contexto accionable; stacktrace solo cuando corresponda.

# Privacidad

No registrar secretos, cookies, tokens, contraseñas, dirección exacta, coordenadas privadas ni datos personales completos. Usar IDs internos o valores enmascarados.

# Niveles

- ERROR: fallo que impide completar.
- WARN: situación anómala recuperable.
- INFO: evento de negocio u operación relevante.
- DEBUG: detalle de diagnóstico no habilitado indiscriminadamente en producción.

# Verificación

Probar éxito, error, correlación, concurrencia, duración no negativa, ausencia de secretos y no duplicación del evento final. OpenTelemetry complementa, no sustituye, el logging.
