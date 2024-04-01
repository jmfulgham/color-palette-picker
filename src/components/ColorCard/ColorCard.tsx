import { Color } from "../../types";
import { getLegibleTextColor, hexToRgb } from "../../util";
import './ColorCard.css'
interface Props {
  color: Color;
}

export function ColorCard({
  color: { name, hex },
}: Props) {
  const backgroundColor = hex;
  const contrastingColor = getLegibleTextColor(hex);
  const color = contrastingColor;

  // @TODO: implement hexToRgb and pass rgb() color to `style` prop.
  // const color = hexToRgb(contrastingColor);

  return (
    <div className="color-card-container" style={{ backgroundColor, color }}>
      <h2>{name.toLowerCase()}</h2>
      <p>{hex}</p>
    </div>
  );
}
