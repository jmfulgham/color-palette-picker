import { type HexColor } from "../types";

import { hexToRgb } from "./hexToRgb";

export function getLegibleTextColor<
  YieldedColors extends string = "white" | "black",
>(colorHex: HexColor) {
  const { r, g, b } = hexToRgb(colorHex) || { r: 0, g: 0, b: 0 };

  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  // Apply gamma correction
  const redGamma = red ** 2.2;
  const greenGamma = green ** 2.2;
  const blueGamma = blue ** 2.2;

  // Calculate luminosity
  const luminosity =
    0.2126 * redGamma + 0.7152 * greenGamma + 0.0722 * blueGamma;

  // Return luminosity;
  if (luminosity > 0.5) {
    return "black" as YieldedColors;
  }

  return "white" as YieldedColors;
}
