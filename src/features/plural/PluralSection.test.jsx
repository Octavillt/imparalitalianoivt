import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavigationContext } from "../../navigation/NavigationContext";
import PluralSection from "./PluralSection";

describe("Género y plural", () => {
  it("muestra los irregulares completos", () => {
    const { container } = render(
      <NavigationContext.Provider value={{ goTo: vi.fn() }}>
        <PluralSection />
      </NavigationContext.Provider>,
    );
    expect(container.textContent).toContain("gli uomini");
    expect(container.textContent).toContain("le mani");
  });
});
