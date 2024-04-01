import { Color } from "../../types";
import { getLegibleTextColor, hexToRgb } from "../../util";

import Rating from "../Rating/Rating.tsx";

interface Props {
  color: Color;
  updateColorRating: () => void;
}

export function ColorCard({
  color: { name, hex, rating },
  updateColorRating,
}: Props) {
  const backgroundColor = hex;
  const contrastingColor = getLegibleTextColor(hex);
  const color = contrastingColor;

  // @TODO: implement hexToRgb and pass rgb() color to `style` prop.
  // const color = hexToRgb(contrastingColor);
  // @TODO: Add a function to update a color's rating

  return (
    <div className="colorCard" style={{ backgroundColor, color }}>
      <h2>Name: {name}</h2>
      <p>
        Color: {hex} <input type="color" value={hex} />
      </p>
      {/* <div>Rating: {rating}</div> */}
      <Rating handleChangeRating={updateColorRating} rating={rating} />
    </div>
  );
}
