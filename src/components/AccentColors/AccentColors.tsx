import { HexColor, RGB } from "../../types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./AccentColors.css";
import AccentColor from "../AccentColor/AccentColor.tsx";
import { rgbToHex } from "../../util";

type AccentColorProps = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  complementaryColors: RGB[];
}

const AccentColors = ({ expanded, setExpanded, complementaryColors }: AccentColorProps) => {
  const [complementHex, setComplementHex] = useState<string[]>([]);
  const handleClose = () => {
    setExpanded(false);
  };

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
      {complementHex.map((color, i) => <AccentColor color={color} key={i} />)}
    </div>
  </dialog>);
};


export default AccentColors;