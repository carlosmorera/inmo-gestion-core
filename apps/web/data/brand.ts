export const brand = {
  name: "Lúmina Raíz",
  descriptor: "Inmobiliaria boutique",
  location: "Bogotá, Colombia",
  email: "hola@lumina-raiz.demo",
  phoneLabel: "+57 300 000 0000",
} as const;

const whatsappMessage =
  "Hola, vi la demostración de Lúmina Raíz y quiero conocer más sobre una propiedad.";

export function getWhatsappHref(
  configuredUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL,
): string | null {
  if (!configuredUrl) {
    return null;
  }

  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== "https:" || url.hostname !== "wa.me") {
      return null;
    }

    url.searchParams.set("text", whatsappMessage);
    return url.toString();
  } catch {
    return null;
  }
}
