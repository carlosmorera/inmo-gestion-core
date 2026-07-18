export type Property = {
  id: string;
  title: string;
  type: "Apartamento" | "Casa" | "Penthouse";
  operation: "Venta" | "Arriendo";
  price: string;
  sector: string;
  city: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  badge: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  mapPosition: { x: number; y: number };
};

export const properties: Property[] = [
  {
    id: "bosque-alto-401",
    title: "Apartamento Bosque Alto",
    type: "Apartamento",
    operation: "Venta",
    price: "$1.280 millones",
    sector: "El Poblado",
    city: "Medellín",
    area: 168,
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 2,
    badge: "Vista privilegiada",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    imageAlt: "Sala amplia de apartamento contemporáneo con ventanales",
    sourceUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    mapPosition: { x: 66, y: 29 },
  },
  {
    id: "casa-reserva-12",
    title: "Casa Reserva Natural",
    type: "Casa",
    operation: "Venta",
    price: "$2.450 millones",
    sector: "Alto de Las Palmas",
    city: "Envigado",
    area: 340,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 3,
    badge: "Nueva",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageAlt: "Casa moderna rodeada de jardín y vegetación",
    sourceUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    mapPosition: { x: 78, y: 63 },
  },
  {
    id: "penthouse-cielo-1801",
    title: "Penthouse Cielo Abierto",
    type: "Penthouse",
    operation: "Venta",
    price: "$3.100 millones",
    sector: "Los Balsos",
    city: "Medellín",
    area: 286,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    badge: "Exclusiva",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    imageAlt: "Interior luminoso de penthouse con diseño cálido",
    sourceUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    mapPosition: { x: 55, y: 48 },
  },
  {
    id: "refugio-verde-08",
    title: "Refugio Verde",
    type: "Casa",
    operation: "Venta",
    price: "$1.890 millones",
    sector: "Llanogrande",
    city: "Rionegro",
    area: 310,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 4,
    badge: "Lote independiente",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    imageAlt: "Fachada de casa campestre contemporánea",
    sourceUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    mapPosition: { x: 27, y: 68 },
  },
  {
    id: "loft-museo-503",
    title: "Loft Distrito Creativo",
    type: "Apartamento",
    operation: "Arriendo",
    price: "$8,9 millones / mes",
    sector: "Ciudad del Río",
    city: "Medellín",
    area: 112,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 2,
    badge: "Amoblado",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    imageAlt: "Loft moderno con sala de doble altura",
    sourceUrl: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    mapPosition: { x: 38, y: 35 },
  },
  {
    id: "terraza-oriente-901",
    title: "Terraza del Oriente",
    type: "Apartamento",
    operation: "Venta",
    price: "$980 millones",
    sector: "San Antonio de Pereira",
    city: "Rionegro",
    area: 142,
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 2,
    badge: "Entrega inmediata",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    imageAlt: "Apartamento sereno con terraza y acabados naturales",
    sourceUrl: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    mapPosition: { x: 17, y: 42 },
  },
];
