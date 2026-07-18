# STACK.md — MVP Plataforma Inmobiliaria

## 1. Objetivo

Construir un catálogo inmobiliario público con un panel privado para un único administrador. El administrador crea, edita, publica y retira inmuebles; los visitantes únicamente consultan propiedades y contactan a la inmobiliaria.

## 2. Stack aprobado

### Frontend
- Next.js 16+ con App Router.
- React y TypeScript en modo estricto.
- Tailwind CSS.
- shadcn/ui para componentes base.
- React Hook Form + Zod para formularios.
- TanStack Query solo para estado remoto que realmente lo requiera.
- Next/Image para entrega optimizada de imágenes.

### Backend
- Java 21 LTS.
- Spring Boot 3.x.
- Spring Web MVC.
- Spring Security.
- Spring Data JPA.
- Bean Validation.
- Flyway para migraciones.
- springdoc-openapi para documentación HTTP.
- Gradle con Kotlin DSL o Maven; no mezclar ambos.

### Datos
- PostgreSQL 16+.
- PostGIS se añade únicamente cuando haya consultas geoespaciales reales.
- UUID para identificadores públicos.
- Migraciones inmutables y versionadas con Flyway.

### Archivos e imágenes
- Amazon S3.
- Carga directa mediante URL prefirmada.
- La base de datos almacena metadata y object keys, nunca binarios.
- Formatos de entrega preferidos: WebP y AVIF.
- Eliminar EXIF sensible, especialmente coordenadas GPS.

### Mapas
- Google Maps Platform para autocompletado, geocodificación y selección del punto.
- La dirección exacta se guarda de forma privada.
- El portal público muestra ubicación aproximada o barrio.

### Infraestructura
- Docker y Docker Compose.
- AWS Lightsail para el MVP.
- Caddy como reverse proxy y TLS automático.
- Cloudflare para DNS, CDN y protección básica.
- GitHub Container Registry para imágenes.
- GitHub Actions para CI/CD.

### Observabilidad
- Logs JSON estructurados.
- Correlation ID por solicitud.
- Health checks de aplicación, base de datos y almacenamiento.
- Métricas mínimas: solicitudes, errores, latencia y carga de imágenes.
- OpenTelemetry solo cuando exista una estrategia clara de trazabilidad.

## 3. Arquitectura

```text
Browser
  ├── Portal público Next.js
  └── Panel administrativo Next.js
             │ HTTPS
             ▼
       Spring Boot API
       ├── Auth y autorización
       ├── Propiedades
       ├── Imágenes
       ├── Contactos
       └── Auditoría
          │         │
          ▼         ▼
    PostgreSQL     Amazon S3
          │
          └── Google Maps APIs
```

## 4. Organización del repositorio

```text
/
├── AGENTS.md
├── STACK.md
├── README.md
├── compose.yaml
├── .env.example
├── apps/
│   ├── web/                 # Next.js
│   └── api/                 # Spring Boot
├── infra/
│   ├── caddy/
│   ├── docker/
│   └── scripts/
├── docs/
│   ├── architecture/
│   ├── decisions/           # ADR
│   ├── api/
│   └── product/
├── skills/                  # Fuente canónica
├── .agents/skills/          # Enlaces/copias para Codex
└── .opencode/skills/        # Enlaces/copias para OpenCode
```

## 5. Modelo funcional inicial

Entidades principales:
- User: un administrador en el MVP.
- Property.
- PropertyImage.
- Feature.
- PropertyFeature.
- ContactRequest.
- AuditEvent.

Estados de una propiedad:
- DRAFT.
- PUBLISHED.
- RESERVED.
- SOLD.
- RENTED.
- ARCHIVED.

Tipos de operación:
- SALE.
- RENT.

## 6. Contratos técnicos

- API bajo `/api/v1`.
- Fechas en ISO 8601 y UTC.
- Dinero representado con `BigDecimal` y código de moneda.
- Nunca usar `float` o `double` para precios.
- Errores con Problem Details (`application/problem+json`).
- Paginación obligatoria en listados administrativos y públicos.
- Slugs legibles, pero el UUID es la identidad estable.
- Los endpoints públicos solo retornan propiedades publicadas.

## 7. Restricciones del MVP

No desarrollar sin aprobación explícita:
- Registro de visitantes.
- Favoritos.
- Pagos.
- Aplicación móvil.
- CRM completo.
- Agentes múltiples o multi-tenant.
- Agenda de visitas.
- Chat interno.
- Recomendaciones con IA.
- Importación automática desde portales externos.

## 8. Criterio para nuevas dependencias

Antes de agregar una dependencia:
1. Confirmar que el stack actual no cubre el requisito.
2. Justificar su necesidad en el PR.
3. Evaluar mantenimiento, licencia, seguridad y compatibilidad.
4. Evitar librerías duplicadas.
5. Fijar una versión reproducible.
6. Añadir pruebas y documentación cuando afecte comportamiento u operación.
