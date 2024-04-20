import { Color, HexColor, RGB } from "../../types";
import { getLegibleTextColor, handleComplementaryColors } from "../../util";
import './ColorCard.css'
import React, { ChangeEvent, useEffect, useState } from "react";
import AccentColors from "../AccentColors/AccentColors.tsx";

interface Props {
  color: Color;
}
//TODO update change of color to change of accents
// rename accents and complements (wrong term for the colors)
// handle close modal and change onBlur
// add tests
// make sure responsive
export function ColorCard({
                            color: { name, hex },
                          }: Props) {
  const [backgroundColor, setBackgroundColor] = useState<HexColor|string>(hex);
  const color = getLegibleTextColor(hex)
  const [contrastingColor, setContrastingColor] = useState(color);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [complementaryColors, setComplementaryColors] = useState<RGB[]>([]);

  useEffect(()=>{
    setComplementaryColors(handleComplementaryColors({name, hex}))
  }, [name, hex])

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setBackgroundColor(e.target.value)
    setContrastingColor(contrastingColor)
  }

  const handleModal = (): void => setExpanded(!expanded);

  return (
    <div className="color-card-container" style={{ backgroundColor, color }} onClick={handleModal}>
      <div className={'color-details'}><h2>{name.toLowerCase()}</h2>
      <p>{hex}</p></div>
      <div className={'color-card-picker'}>
        <input name="color-card-selection" id="color" type="color" value={backgroundColor} onChange={e=>handleChange(e)}/>
      </div>
      {expanded && <AccentColors complementaryColors={complementaryColors} expanded={expanded} setExpanded={setExpanded}/>}
    </div>
  );
}
