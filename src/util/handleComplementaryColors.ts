import { hexToRgb } from "./hexToRgb.ts";
import {HexColor, RGB } from "../types";

export function handleComplementaryColors(hex: HexColor){
  const rgbCode = hexToRgb(hex);
  const decreaseColor: RGB = { r: 0, g: 0, b: 0 }
  const highColor: RGB = { r: 0, g: 0, b: 0 }
  const lowColor: RGB = { r: 0, g: 0, b: 0 }
  const newColors: RGB[] = []
  //TODO fix ignored lines
      //Update each color
      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] <= 255) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          decreaseColor[ltr] = Math.abs(rgbCode[ltr] - 22)
        }
      }

      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] <= 205) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          highColor[ltr] = rgbCode[ltr] + 30
        }  // @ts-ignore
       else if ((rgbCode[ltr] <= 215) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          highColor[ltr] = rgbCode[ltr] + 40
        } else{
          // @ts-ignore
          highColor[ltr] = rgbCode[ltr]
        }
      }

      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] <= 255) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          lowColor[ltr] = Math.abs(rgbCode[ltr] - 45)
        }
      }

  newColors.push(highColor)
  rgbCode && newColors.push(rgbCode)
  newColors.push(decreaseColor)
  newColors.push(lowColor)
  return newColors;
}