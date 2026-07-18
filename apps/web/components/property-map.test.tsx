import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { properties } from "@/data/properties";
import { PropertyMap } from "./property-map";

describe("PropertyMap", () => {
  it("changes the selected property through an accessible marker", () => {
    render(<PropertyMap properties={properties.slice(0, 2)} />);

    const secondMarker = screen.getByRole("button", {
      name: `Ver ${properties[1].title}, ${properties[1].sector}`,
    });

    expect(secondMarker).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(secondMarker);

    expect(secondMarker).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: properties[1].title })).toBeInTheDocument();
  });
});
