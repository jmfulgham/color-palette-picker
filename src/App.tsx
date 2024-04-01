import { useState } from "react";

import { ColorCard, ColorSelector } from "./components";
import { Color } from "./types";
import "./App.css";

function App() {
  const [colors, setColors] = useState<Color[]>([]);

  const addColor = (color: Color) => setColors([...colors, color]);

  // @TODO: Add a function to remove a color from the list of colors
  const removeColor = (colorName: string) => {};

  const updateColorRating = (index: number) => {
    console.log(index);
  };

  return (
    <>
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
            updateColorRating={updateColorRating}
          />
        ))}
      </section>
    </>
  );
}

export default App;
