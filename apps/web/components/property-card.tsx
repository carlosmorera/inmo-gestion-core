import Image from "next/image";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
};

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="property-card" id={`property-${property.id}`}>
      <div className="property-card__media">
        <Image
          src={property.image}
          alt={property.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 31vw"
        />
        <span className="property-card__badge">{property.badge}</span>
        <span className="property-card__operation">{property.operation}</span>
      </div>
      <div className="property-card__body">
        <p className="property-card__location">
          {property.sector} · {property.city}
        </p>
        <h3>{property.title}</h3>
        <p className="property-card__price">{property.price}</p>
        <dl className="property-card__facts" aria-label="Características">
          <div>
            <dt>Área</dt>
            <dd>{property.area} m²</dd>
          </div>
          <div>
            <dt>Habitaciones</dt>
            <dd>{property.bedrooms}</dd>
          </div>
          <div>
            <dt>Baños</dt>
            <dd>{property.bathrooms}</dd>
          </div>
        </dl>
        <a className="property-card__link" href="#contacto">
          Solicitar información <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
