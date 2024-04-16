import { useEffect, useState } from "react";

import { ColorCard, ColorSelector } from "./components";
import { Color } from "./types";
import "./App.css";
import { RGB } from "./util/getLegibleTextColor.ts";
import { hexToRgb } from "./util";

function App() {
  const [colors, setColors] = useState<Color[]>([]);
  const [complementaryColors, setComplementaryColors] = useState<RGB[]>([]);

  const addColor = (color: Color) => setColors([...colors, color]);
  const handleCalculateComplementaryColors = () => {
    //TODO refactor for five colors
    const rgbCodes = colors.map(color=>hexToRgb(color.hex));
    const decreaseColor: RGB = { r: 0, g: 0, b: 0 }
    const increaseColor: RGB = { r: 0, g: 0, b: 0 }
    const newColors: RGB[] = []
  //TODO fix ignored lines
    rgbCodes.forEach(rgb => {
      if (rgb) {
        //decrease each color
        for (const ltr in rgb) {
          // @ts-ignore
          if ((rgb[ltr] < 255) && (rgb[ltr] > 0)) {
            // @ts-ignore
            decreaseColor[ltr] = rgb[ltr] - 30
          }
        }
        newColors.push(decreaseColor)
        //increase each color as long as it's not over 255
        for (const ltr in rgb) {
          // @ts-ignore
          if ((rgb[ltr] <= 225) && (rgb[ltr] > 0)) {
            // @ts-ignore
            increaseColor[ltr] = rgb[ltr] + 30
          } else{
            // @ts-ignore
            increaseColor[ltr] = rgb[ltr]
          }
        }
        newColors.push(increaseColor)
        setComplementaryColors([...newColors])
      }
    })
  }

  useEffect(()=>{
    handleCalculateComplementaryColors()
  }, [colors])

  // @TODO: Add a function to remove a color from the list of colors
  // const removeColor = (colorName: string) => {};

  return (
    <div className={'parent-container'}>
      <h1>Color Palette Builder</h1>
      <div className="card">
        <p>
          Pick a color and enter a name to start building your color palette.
        </p>
      </div>
      <ColorSelector addColor={addColor} />
      <section>
        {colors.map((color) => (
          <ColorCard
            key={color.name}
            color={color}
            complementaryColors={complementaryColors}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
