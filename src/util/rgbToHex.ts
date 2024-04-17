import { type HexColor, RGB } from "../types";

export function rgbToHex(colorCode: RGB): HexColor {
  let r = colorCode.r.toString(16);
  let g = colorCode.g.toString(16);
  let b = colorCode.b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  console.log(colorCode)
  return `#${r}${g}${b}`;
}
