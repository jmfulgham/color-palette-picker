import "./AccentColor.css";
import { ReactNode } from "react";

interface AccentColorProps {
  color: string;
  key: number;
}

const AccentColor = ({ color, key }: AccentColorProps) => {
  return (<div className={'parent'}>
    <div className={`accent-color`} style={{ backgroundColor: color }} key={`accent-color-${key}`} />
    <div className={'color-code'}>
      {color}
    </div>
  </div>);
}

export default AccentColor;