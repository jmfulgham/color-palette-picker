import "./MonochromeColor.css";

interface AccentColorProps {
  color: string;
  key: number;
}

const MonochromeColor = ({ color, key }: AccentColorProps) => {
  return (<div className={'parent'}>
    <div className={`accent-color`} style={{ backgroundColor: color }} key={`accent-color-${key}`} />
    <div className={'color-code'}>
      {color}
    </div>
  </div>);
}

export default MonochromeColor;