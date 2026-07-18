import type { ImageLoaderProps } from "next/image";

export default function imageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const url = new URL(src);

  if (url.hostname !== "images.unsplash.com") {
    throw new Error("Only approved Unsplash image URLs are supported");
  }

  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", (quality ?? 82).toString());

  return url.toString();
}
