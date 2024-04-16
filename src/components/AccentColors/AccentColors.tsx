import { HexColor, RGB } from "../../types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./AccentColors.css";
import AccentColor from "../AccentColor/AccentColor.tsx";
import { hexToRgb } from "../../util";

type AccentColorProps = {
  color: HexColor;
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  handleBlur: () => void;
  complementaryColors: RGB[];
}

const AccentColors = ({ color, expanded, setExpanded, handleBlur, complementaryColors }: AccentColorProps) => {
  const handleClose = () => {
    setExpanded(false);
  };
  const formatComplementaryColors = ()=>{
    //{ r: 116, g: 78, b: 212 }
    //rgb(116 78 212)
    complementaryColors.map((color)=>{
      for(const ltr in color){
        console.log(ltr)
      }
    })
  }
  // console.log(complementaryColors)
  formatComplementaryColors()
  return (<dialog open={expanded} onBlur={handleBlur} onClick={handleClose} className={"ac-modal-container"}
                  id={"ac-modal-dialog"}>
    <div className={"ac-modal-header"}><h2>Accent Colors: {color}</h2></div>
    <div className={"accent-colors-container"}>
      {complementaryColors.map((color, i) => <AccentColor color={color} key={i} />)}
    </div>
  </dialog>);
};


export default AccentColors;