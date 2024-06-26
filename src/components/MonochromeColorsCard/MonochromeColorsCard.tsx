import { HexColor, RGB } from "../../types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./MonochromeColorsCard.css";
import MonochromeColor from "../MonochromeColor/MonochromeColor.tsx";
import { handleComplementaryColors, rgbToHex } from "../../util";

type AccentColorProps = {
  expanded: boolean;
  hex: any;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const MonochromeColorsCard = ({ hex, expanded, setExpanded }: AccentColorProps) => {
  const [complementHex, setComplementHex] = useState<string[]>([]);
  const [complementaryColors, setComplementaryColors] = useState<RGB[]>([]);

  const handleClose = () => {
    setExpanded(false);
  };

  useEffect(()=>{
    setComplementaryColors(handleComplementaryColors(hex))
  }, [hex])


  useEffect(() => {
    let hexCodes: HexColor[] = complementaryColors.map((color) => (rgbToHex(color)));
    setComplementHex(hexCodes);
  }, [complementaryColors]);

  return (<dialog open={expanded} className={"ac-modal-container"}
                  id={"ac-modal-dialog"}>
    <div className={"ac-modal-header"}><h2>Accent Colors</h2>
      <>
        <button className={"close-btn"} onClick={handleClose}>x</button>
      </>
    </div>

    <div className={"accent-colors-container"}>
      {complementHex.map((color, i) => <MonochromeColor color={color} key={i} />)}
    </div>
  </dialog>);
};


export default MonochromeColorsCard;