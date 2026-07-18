import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `${brand.name} | Propiedades con otra perspectiva`,
  description:
    "Demostración de una experiencia inmobiliaria boutique para descubrir propiedades seleccionadas en Bogotá, Colombia.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: `${brand.name} | Inmobiliaria boutique`,
    description:
      "Una experiencia inmobiliaria de demostración para propiedades extraordinarias.",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82",
        width: 1200,
        height: 630,
        alt: "Casa contemporánea presentada en la demostración de Lúmina Raíz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Inmobiliaria boutique`,
    description: "Una experiencia inmobiliaria de demostración para propiedades extraordinarias.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
