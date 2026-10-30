import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavigationContext } from "../../navigation/NavigationContext";
import NumbersSection from "./NumbersSection";

describe("Números", () => {
  it("muestra del 17 al 19 sin repetir la raíz", () => {
    const { container } = render(
      <NavigationContext.Provider value={{ goTo: vi.fn() }}>
        <NumbersSection />
      </NavigationContext.Provider>,
    );
    expect(container.textContent).toContain("diciassette");
    expect(container.textContent).toContain("diciotto");
    expect(container.textContent).toContain("diciannove");
    expect(container.textContent).not.toContain("dicidici");
  });
});
