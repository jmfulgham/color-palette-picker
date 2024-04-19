import { HexColor, RGB } from "../../types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./AccentColors.css";
import AccentColor from "../AccentColor/AccentColor.tsx";
import { rgbToHex } from "../../util";

type AccentColorProps = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  handleBlur: () => void;
  complementaryColors: RGB[];
}

const AccentColors = ({ expanded, setExpanded, handleBlur, complementaryColors }: AccentColorProps) => {
  const [complementHex, setComplementHex] = useState<string[]>([])
  const handleClose = () => {
    setExpanded(false);
  };

  useEffect(()=>{
    let hexCodes: HexColor[] = complementaryColors.map((color)=>(rgbToHex(color)))
    setComplementHex(hexCodes)
  }, [complementaryColors])

  return (<dialog open={expanded} onBlur={handleBlur} onClick={handleClose} className={"ac-modal-container"}
                  id={"ac-modal-dialog"}>
    <div className={"ac-modal-header"}><h2>Accent Colors</h2></div>
    <div className={"accent-colors-container"}>
      {complementHex.map((color, i) => <AccentColor color={color} key={i} />)}
    </div>
  </dialog>);
};


export default AccentColors;