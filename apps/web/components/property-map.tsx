"use client";

import Image from "next/image";
import { useState } from "react";
import type { Property } from "@/data/properties";

type PropertyMapProps = {
  properties: Property[];
};

export function PropertyMap({ properties }: PropertyMapProps) {
  const [selectedId, setSelectedId] = useState(properties[0]?.id ?? "");
  const selected =
    properties.find((property) => property.id === selectedId) ?? properties[0];

  if (!selected) {
    return null;
  }

  return (
    <div className="map-layout">
      <div className="demo-map" aria-label="Mapa ilustrado de ubicaciones aproximadas">
        <svg
          className="demo-map__drawing"
          viewBox="0 0 900 620"
          role="img"
          aria-label="Ilustración urbana ficticia con vías, parques y un río"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="900" height="620" fill="#e7e4da" />
          <path
            d="M-20 500 C130 410 180 480 320 400 S520 250 940 320"
            fill="none"
            stroke="#b4c9c0"
            strokeWidth="68"
          />
          <path
            d="M-20 500 C130 410 180 480 320 400 S520 250 940 320"
            fill="none"
            stroke="#dce9e4"
            strokeWidth="44"
          />
          <g fill="none" stroke="#fffdf8" strokeWidth="16">
            <path d="M80 -20 L310 640" />
            <path d="M480 -20 L560 640" />
            <path d="M790 -20 L650 640" />
            <path d="M-20 120 L920 70" />
            <path d="M-20 270 L920 210" />
            <path d="M-20 560 L920 475" />
          </g>
          <g fill="#d1d9bd">
            <path d="M90 50h145v105H90z" />
            <path d="M600 40h185v108H600z" />
            <path d="M320 435h140v125H320z" />
            <path d="M705 410h135v105H705z" />
          </g>
          <g fill="#c7c2b5" opacity="0.65">
            <path d="M285 80h110v68H285z" />
            <path d="M420 95h95v78H420z" />
            <path d="M120 220h125v78H120z" />
            <path d="M620 235h135v70H620z" />
            <path d="M120 510h115v64H120z" />
          </g>
        </svg>

        <span className="demo-map__district demo-map__district--one">La Arboleda</span>
        <span className="demo-map__district demo-map__district--two">Distrito Río</span>
        <span className="demo-map__district demo-map__district--three">Altos del Este</span>

        {properties.map((property, index) => (
          <button
            key={property.id}
            type="button"
            className="map-marker"
            style={{
              left: `${property.mapPosition.x}%`,
              top: `${property.mapPosition.y}%`,
            }}
            aria-label={`Ver ${property.title}, ${property.sector}`}
            aria-pressed={selected.id === property.id}
            onClick={() => setSelectedId(property.id)}
          >
            <span aria-hidden="true">{index + 1}</span>
          </button>
        ))}
      </div>

      <aside className="map-card" aria-live="polite">
        <div className="map-card__image">
          <Image
            src={selected.image}
            alt=""
            fill
            sizes="(max-width: 900px) 88vw, 340px"
          />
        </div>
        <p className="map-card__eyebrow">Selección {properties.indexOf(selected) + 1}</p>
        <h3>{selected.title}</h3>
        <p className="map-card__location">
          {selected.sector} · {selected.city}
        </p>
        <p className="map-card__price">{selected.price}</p>
        <p className="map-card__facts">
          {selected.area} m² · {selected.bedrooms} hab. · {selected.parkingSpaces} parqueaderos
        </p>
        <a href={`#property-${selected.id}`}>Ver ficha en el catálogo</a>
      </aside>
    </div>
  );
}
