import { type HexColor } from "../types";

export function hexToRgb(hex: HexColor) {
  const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexLonghand = hex.replace(regex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    .exec(hexLonghand)
    ?.map((val) => parseInt(val, 16));

  const [_, r, g, b] = result || [];
  if (r != null && g != null && b != null) {
    return { r, g, b };
  }

  console.warn("invalid color", result);
  return null;
}
