import { render, screen, fireEvent } from "@testing-library/react";
import ColorSelector from "./ColorSelector.tsx";
import { vi } from "vitest";

describe("ColorSelector", () => {
  it("should submit a color", () => {
    const addColor = vi.fn();
    render(<ColorSelector addColor={addColor} />);
    const colorNameInput = screen.getByLabelText("Color name:");
    const colorInput = screen.getByLabelText("Color:");
    const submitButton = screen.getByRole("button", { name: "Save Color" });

    fireEvent.change(colorNameInput, { target: { value: "Red" } });
    fireEvent.change(colorInput, { target: { value: "#ff0000" } });
    fireEvent.click(submitButton);

    expect(addColor).toHaveBeenCalledWith({
      name: "Red",
      hex: "#ff0000",
      rating: 0,
    });
  });

  it("should not submit a color if color name is empty", () => {
    const addColor = vi.fn();
    render(<ColorSelector addColor={addColor} />);
    const colorInput = screen.getByLabelText("Color:");
    const submitButton = screen.getByRole("button", { name: "Save Color" });

    fireEvent.change(colorInput, { target: { value: "#A67391" } });
    fireEvent.click(submitButton);

    expect(addColor).toHaveBeenCalledTimes(0);
  });
});
