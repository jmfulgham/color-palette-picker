import "./AccentColor.css";

interface AccentColorProps {
  color: string;
  key: number;
}

const AccentColor = ({ color, key }: AccentColorProps) => {
  return (<div className={`accent-color`} style={{ backgroundColor: color }} key={`accent-color-${key}`} />);
}

export default AccentColor;