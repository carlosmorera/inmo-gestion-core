import { describe, expect, it } from "vitest";
import { brand } from "./brand";
import { properties } from "./properties";

describe("Bogotá demo catalog", () => {
  it("uses Bogotá as the market for the brand and every property", () => {
    expect(brand.location).toBe("Bogotá, Colombia");
    expect(properties).toHaveLength(6);
    expect(properties.every((property) => property.city === "Bogotá D.C.")).toBe(true);
  });

  it("does not expose exact addresses in the public property data", () => {
    expect(properties.every((property) => !/\b(calle|carrera|avenida|diagonal)\b/i.test(property.sector))).toBe(true);
  });
});
