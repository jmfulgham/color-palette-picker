import { HexColor } from "../../types";
import { Dispatch, SetStateAction } from "react";
import "./AccentColors.css"

type AccentColorProps = {
  color: HexColor | string;
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  handleBlur: () => void;
}

const AccentColors = ({ color, expanded, setExpanded, handleBlur  }: AccentColorProps) => {
  const handleClose = ()=>{
    setExpanded(false)
  }

  return (<dialog open={expanded} onBlur={handleBlur}  onClick={handleClose} className={'ac-modal-container'} id={'ac-modal-dialog'}>
    <div className={'ac-modal-header'}><h2>Accent Colors: {color}</h2></div>
    <div className={'accent-colors-container'}>
      {[...Array(5)].map((i)=> <div className={`accent-color-child`} key={`accent-color-${i}`} style={{ backgroundColor: color }} />)}
    </div>
  </dialog>)
}


export default AccentColors;