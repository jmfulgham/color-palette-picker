import { Color, HexColor } from "../../types";
import { getLegibleTextColor, hexToRgb } from "../../util";
import './ColorCard.css'
import React, { ChangeEvent, useState } from "react";
import AccentColors from "../AccentColors/AccentColors.tsx";

interface Props {
  color: Color;
}

export function ColorCard({
                            color: { name, hex }
                          }: Props) {
  const [backgroundColor, setBackgroundColor] = useState<HexColor|string>(hex);
  const color = getLegibleTextColor(hex)
  const [contrastingColor, setContrastingColor] = useState(color);
  const [expanded, setExpanded] = useState<boolean>(false);

  // @TODO: implement hexToRgb and pass rgb() color to `style` prop.
  // const color = hexToRgb(contrastingColor);
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setBackgroundColor(e.target.value)
    setContrastingColor(contrastingColor)
  }

  const handleModal = ()=> setExpanded(!expanded);

  return (
    <div className="color-card-container" style={{ backgroundColor, color }} onClick={handleModal} onBlur={handleModal}>
      <div className={'color-details'}><h2>{name.toLowerCase()}</h2>
      <p>{hex}</p></div>
      <div className={'color-card-picker'}>
        <input name="color-card-selection" id="color" type="color" value={backgroundColor} onChange={e=>handleChange(e)}/>
      </div>
      {expanded && <AccentColors color={backgroundColor} handleBlur={handleModal} expanded={expanded} setExpanded={setExpanded}/>}
    </div>
  );
}
