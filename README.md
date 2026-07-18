# Lúmina Raíz - Demo inmobiliaria

Landing inmobiliaria ficticia para demostrar a potenciales clientes una experiencia pública de marca, catálogo y exploración territorial. Los inmuebles, ubicaciones, precios y testimonios no representan ofertas reales.

## Estado

La primera entrega contiene:

- Landing responsive con identidad premium ficticia.
- Seis propiedades demostrativas.
- Mapa urbano ficticio con marcadores accesibles.
- CTA de WhatsApp configurable.
- Exportación estática de Next.js.
- Nginx y Cloudflare Quick Tunnel mediante Docker Compose.
- Bloqueo de indexación para evitar publicar contenido ficticio en buscadores.

El seguimiento detallado está en `docs/product/DEMO_LANDING_TRACKING.md`.

Para ejecutar la demo en hardware de bajos recursos, consultar `docs/operations/RASPBERRY_PI.md`.

## Requisitos

- Node.js 24 y npm 11.
- Docker Engine con Docker Compose.

## Desarrollo local

Desde `apps/web`:

```bash
npm ci
npm run dev
```

Abrir `http://localhost:3000`.

## Configuración opcional

El CTA externo solo se activa con una URL válida de `wa.me`:

```bash
cp .env.example .env
```

Ejemplo:

```dotenv
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/573001234567
```

No se debe incluir `.env` en Git.

## Quality gates

Desde `apps/web`:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Desde la raíz:

```bash
docker compose config
docker compose build
```

## Demo con Cloudflare

```bash
docker compose up -d --build
docker compose ps
docker compose logs cloudflared
```

Cloudflared imprime una URL temporal con dominio `trycloudflare.com`. Esa URL cambia cuando el túnel se recrea y no debe utilizarse como dominio definitivo ni URL canónica.

Para detener la demo:

```bash
docker compose down
```

## Arquitectura de la demo

```text
Browser
  -> Cloudflare Quick Tunnel
  -> cloudflared
  -> Nginx sin privilegios :8080
  -> exportación estática de Next.js
```

Nginx solo recibe el contenido generado en `apps/web/out`; el código fuente, los archivos de entorno y la configuración de infraestructura no forman parte del directorio público.

## Estructura principal

```text
apps/web/                       Next.js y pruebas
infra/nginx/default.conf        Servidor estático y headers
docs/product/                   Seguimiento y fuentes visuales
compose.yaml                    Demo local y túnel temporal
.env.example                    Configuración pública de ejemplo
```

## Alcance

Esta entrega no incluye backend, base de datos, panel administrativo, búsqueda real, formularios persistentes, mapas reales ni publicación permanente. El alcance aprobado del producto completo permanece documentado en `STACK.md`.
