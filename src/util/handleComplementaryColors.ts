import { hexToRgb } from "./hexToRgb.ts";
import { Color,  RGB } from "../types";

export function handleComplementaryColors(color: Color){
  const rgbCode = hexToRgb(color.hex);
  const decreaseColor: RGB = { r: 0, g: 0, b: 0 }
  const increaseColor: RGB = { r: 0, g: 0, b: 0 }
  const highColor: RGB = { r: 0, g: 0, b: 0 }
  const lowColor: RGB = { r: 0, g: 0, b: 0 }
  const newColors: RGB[] = []
  //TODO fix ignored lines
 

      //decrease each color
      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] < 255) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          decreaseColor[ltr] = rgbCode[ltr] - 30
        }
      }
      //increase each color as long as it's not over 255
      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] <= 225) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          increaseColor[ltr] = rgbCode[ltr] + 25
        } else{
          // @ts-ignore
          increaseColor[ltr] = rgbCode[ltr]
        }
      }
      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] <= 205) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          highColor[ltr] = rgbCode[ltr] + 50
        }  // @ts-ignore
        if ((rgbCode[ltr] <= 215) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          highColor[ltr] = rgbCode[ltr] + 35
        } else{
          // @ts-ignore
          highColor[ltr] = rgbCode[ltr]
        }
      }

      for (const ltr in rgbCode) {
        // @ts-ignore
        if ((rgbCode[ltr] < 255) && (rgbCode[ltr] > 0)) {
          // @ts-ignore
          lowColor[ltr] = rgbCode[ltr] - 60
        }
      }

  newColors.push(highColor)
  newColors.push(increaseColor)
  rgbCode && newColors.push(rgbCode)
  newColors.push(decreaseColor)
  newColors.push(lowColor)
  return newColors;
}