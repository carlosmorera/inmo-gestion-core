import { describe, expect, it } from "vitest";
import { getWhatsappHref } from "./brand";

describe("getWhatsappHref", () => {
  it("returns null when WhatsApp is not configured", () => {
    expect(getWhatsappHref("")).toBeNull();
  });

  it("rejects URLs outside the approved WhatsApp host", () => {
    expect(getWhatsappHref("https://example.com/contacto")).toBeNull();
    expect(getWhatsappHref("javascript:alert(1)")).toBeNull();
  });

  it("adds the introductory message to a valid URL", () => {
    const href = getWhatsappHref("https://wa.me/573001234567");

    expect(href).toContain("https://wa.me/573001234567");
    expect(href).toContain("text=");
  });
});
