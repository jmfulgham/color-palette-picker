import { Color, HexColor } from "../../types";
import { getLegibleTextColor } from "../../util";
import './ColorCard.css'
import React, { ChangeEvent, useState } from "react";
import MonochromeColorsCard from "../MonochromeColorsCard/MonochromeColorsCard.tsx";

interface Props {
  color: Color;
}
//TODO update
// rename accents and complements (wrong term for the colors)
// handle close modal and change onBlur
// add tests
// make sure responsive
export function ColorCard({
                            color: { name, hex },
                          }: Props) {
  const [backgroundColor, setBackgroundColor] = useState<HexColor>(hex);
  const color = getLegibleTextColor(hex)
  const [contrastingColor, setContrastingColor] = useState(color);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [newHex, setNewHex] = useState<HexColor>(hex)

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setBackgroundColor(e.target.value);
    setNewHex(e.target.value)
    const newContrast = getLegibleTextColor(e.target.value)
    setContrastingColor(newContrast)
  }

  const handleModal = (): void => setExpanded(!expanded);

  return (
    <div className="color-card-container" style={{ backgroundColor, color: contrastingColor }} onClick={handleModal}>
      <div className={'color-details'}><h2>{name.toLowerCase()}</h2>
      <p>{newHex}</p></div>
      <div className={'color-card-picker'}>
        <input name="color-card-selection" id="color" type="color" value={backgroundColor} onChange={e=>handleChange(e)}/>
      </div>
      {expanded && <MonochromeColorsCard hex={newHex} expanded={expanded} setExpanded={setExpanded}/>}
    </div>
  );
}
