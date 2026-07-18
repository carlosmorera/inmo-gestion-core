import Image from "next/image";
import { PropertyCard } from "@/components/property-card";
import { PropertyMap } from "@/components/property-map";
import { brand, getWhatsappHref } from "@/data/brand";
import { properties } from "@/data/properties";

const services = [
  {
    number: "01",
    title: "Selección con criterio",
    copy: "Filtramos ubicación, arquitectura y potencial para presentarte menos opciones, pero mejores.",
  },
  {
    number: "02",
    title: "Lectura del mercado",
    copy: "Acompañamos cada decisión con contexto de zona, comparables y una negociación bien preparada.",
  },
  {
    number: "03",
    title: "Gestión de principio a fin",
    copy: "Coordinamos visitas, documentos y cierre para que el proceso se sienta claro y personal.",
  },
];

const testimonials = [
  {
    quote:
      "Entendieron que no buscábamos más metros, sino una forma distinta de vivir la ciudad.",
    author: "Familia R.",
    context: "Testimonio ilustrativo · Compra residencial",
  },
  {
    quote:
      "La selección fue precisa. En tres visitas encontramos una propiedad que sí tenía sentido para nosotros.",
    author: "Daniel y Mariana",
    context: "Testimonio ilustrativo · Inversión",
  },
];

const faqs = [
  [
    "¿Las propiedades de esta página están disponibles?",
    "No. Esta es una demostración comercial con propiedades, precios y ubicaciones ficticias para visualizar una futura experiencia inmobiliaria.",
  ],
  [
    "¿La plataforma puede conectarse a un inventario real?",
    "Sí. La siguiente etapa puede integrar un catálogo administrable, filtros, estados de publicación y datos reales desde una API segura.",
  ],
  [
    "¿Se puede personalizar con otra marca?",
    "Sí. Identidad, colores, zonas, contenido y canales de contacto están planteados para sustituirse por los del cliente.",
  ],
];

export default function Home() {
  const whatsappHref = getWhatsappHref();

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#inicio" aria-label={`${brand.name}, inicio`}>
            <span className="wordmark__symbol" aria-hidden="true">L</span>
            <span>
              <strong>{brand.name}</strong>
              <small>{brand.descriptor}</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#propiedades">Propiedades</a>
            <a href="#mapa">Mapa</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
          </nav>

          <a className="header-cta" href="#contacto">Conversemos</a>

          <details className="mobile-menu">
            <summary aria-label="Abrir navegación">Menú</summary>
            <nav aria-label="Navegación móvil">
              <a href="#propiedades">Propiedades</a>
              <a href="#mapa">Mapa</a>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Conversemos</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero__image">
            <Image
              src={properties[1].image}
              alt={properties[1].imageAlt}
              fill
              priority
              sizes="100vw"
            />
            <div className="hero__veil" />
          </div>
          <div className="shell hero__content">
            <p className="eyebrow eyebrow--light">Propiedades que se sienten propias</p>
            <h1>Una mejor forma de encontrar tu próximo lugar.</h1>
            <p className="hero__intro">
              Curaduría inmobiliaria para quienes valoran la arquitectura, el entorno
              y una decisión acompañada con criterio.
            </p>
            <div className="hero__actions">
              <a className="button button--light" href="#propiedades">Explorar selección</a>
              <a className="text-link text-link--light" href="#nosotros">Conocer el enfoque</a>
            </div>
          </div>
          <div className="hero__feature" aria-label="Propiedad destacada">
            <span>Propiedad destacada</span>
            <strong>{properties[1].title}</strong>
            <span>{properties[1].sector} · {properties[1].area} m²</span>
          </div>
        </section>

        <section className="search-band" aria-labelledby="search-title">
          <div className="shell">
            <div className="search-band__heading">
              <p id="search-title">¿Qué estás imaginando?</p>
              <span>Exploración visual de demostración</span>
            </div>
            <div className="search-grid" aria-label="Filtros ilustrativos no funcionales">
              <div><span>Operación</span><strong>Comprar</strong></div>
              <div><span>Tipo</span><strong>Casa o apartamento</strong></div>
              <div><span>Zona</span><strong>Bogotá D.C.</strong></div>
              <a href="#propiedades">Ver propiedades <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="section properties-section" id="propiedades">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selección privada</p>
                <h2>Espacios con carácter,<br />elegidos con intención.</h2>
              </div>
              <p>
                Una muestra ficticia de propiedades pensada para demostrar cómo puede
                presentarse un inventario real de forma clara y aspiracional.
              </p>
            </div>
            <div className="property-grid">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} priority={index < 2} />
              ))}
            </div>
          </div>
        </section>

        <section className="section map-section" id="mapa">
          <div className="shell">
            <div className="map-heading">
              <div>
                <p className="eyebrow eyebrow--light">Otra forma de explorar</p>
                <h2>Encuentra oportunidades<br />desde el territorio.</h2>
              </div>
              <p>
                Mapa conceptual con sectores y ubicaciones completamente ficticias.
                Selecciona un punto para conocer la propiedad asociada.
              </p>
            </div>
            <div className="map-disclaimer">
              <span aria-hidden="true">◎</span>
              Ubicaciones aproximadas · Visualización demostrativa
            </div>
            <PropertyMap properties={properties} />
            <noscript>
              <p className="noscript-note">
                El mapa interactivo requiere JavaScript. Todas las propiedades están
                disponibles en el catálogo anterior.
              </p>
            </noscript>
          </div>
        </section>

        <section className="section services-section" id="servicios">
          <div className="shell services-layout">
            <div className="services-intro">
              <p className="eyebrow">Más que mostrar inmuebles</p>
              <h2>Hacemos que una decisión compleja se sienta simple.</h2>
              <p>
                Un servicio boutique combina conocimiento local, escucha y una gestión
                cuidadosa de cada detalle.
              </p>
            </div>
            <ol className="services-list">
              {services.map((service) => (
                <li key={service.number}>
                  <span>{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="editorial-section" id="nosotros">
          <div className="editorial-section__image">
            <Image
              src={properties[2].image}
              alt="Detalle de un interior residencial de diseño contemporáneo"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div className="editorial-section__content">
            <p className="eyebrow">Nuestro enfoque</p>
            <h2>No vendemos metros cuadrados. Interpretamos formas de vivir.</h2>
            <p>
              Cada búsqueda empieza por entender qué quieres proteger, transformar o
              comenzar. Desde ahí construimos una selección que tenga sentido para tu
              momento y tu patrimonio.
            </p>
            <div className="metrics">
              <div><strong>1 a 1</strong><span>Acompañamiento personal</span></div>
              <div><strong>360°</strong><span>Lectura de cada oportunidad</span></div>
            </div>
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="shell">
            <p className="eyebrow">Experiencias ilustrativas</p>
            <h2>Cuando la búsqueda se convierte en una buena historia.</h2>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author}>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption><strong>{testimonial.author}</strong><span>{testimonial.context}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="shell faq-layout">
            <div><p className="eyebrow">Antes de comenzar</p><h2>Preguntas frecuentes</h2></div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}><summary>{question}</summary><p>{answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="shell contact-section__inner">
            <p className="eyebrow eyebrow--light">La conversación empieza aquí</p>
            <h2>Tu próxima propiedad merece una mirada más precisa.</h2>
            <p>Personaliza esta demostración con inventario, marca y canales reales.</p>
            {whatsappHref ? (
              <a className="button button--light" href={whatsappHref} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            ) : (
              <span className="button button--disabled" aria-disabled="true">
                WhatsApp pendiente de configurar
              </span>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="wordmark wordmark--footer">
            <span className="wordmark__symbol" aria-hidden="true">L</span>
            <span><strong>{brand.name}</strong><small>{brand.descriptor}</small></span>
          </div>
          <p>{brand.location}<br />{brand.email}</p>
          <p className="demo-label">Sitio y contenido demostrativos.<br />Las propiedades no constituyen ofertas reales.</p>
        </div>
      </footer>
    </>
  );
}
