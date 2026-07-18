---
name: devops-deployment-best-practices
description: Implementa y audita CI/CD, contenedores, configuración y despliegue del MVP inmobiliario en AWS Lightsail con Docker Compose, Caddy, S3, Cloudflare y GitHub Actions.
---

# Principios

- Builds reproducibles y artefactos inmutables.
- Misma imagen entre staging y producción.
- Configuración externa mediante variables; `.env.example` sin secretos.
- Contenedores sin privilegios y con filesystem/permisos mínimos.
- Health checks y restart policy definidos.
- Migraciones ejecutadas una sola vez y con fallo visible.
- Despliegue reversible a la versión anterior.

# Pipeline

1. Lint, typecheck y tests.
2. Build de frontend y backend.
3. Escaneo básico de dependencias e imágenes.
4. Publicación en GHCR con SHA y versión.
5. Deploy por SSH/action controlada.
6. Migración Flyway.
7. Health check y smoke test.
8. Rollback si la nueva versión no queda saludable.

# Operación

- Backups automáticos de PostgreSQL y prueba periódica de restauración.
- S3 con bloqueo de acceso público y lifecycle adecuado.
- TLS por Caddy y DNS en Cloudflare.
- Alertas por indisponibilidad, errores y disco.
- No editar contenedores en vivo ni desplegar imágenes con tag `latest` como única referencia.
