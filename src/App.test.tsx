import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render the app header", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Color Palette Builder"
    );
  });
});
