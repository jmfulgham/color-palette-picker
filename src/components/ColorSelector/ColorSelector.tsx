import { useState } from "react";
import type {
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

import type { Color, HexColor} from "../../types";

import "./ColorSelector.css";

interface Props {
  addColor: (color: Color) => void;
}

export function ColorSelector({ addColor}: Props) {
  const [name, setName] = useState("");

  // @TODO: augment `hex` state to support multiple color formats.
  const [hex, setHex] = useState<HexColor>("#fff");
  const [error, setError] = useState<boolean>(false);

  const handleSaveColor = () => {
    if(!name){
      setError(true);
      return
    }
    if (error) setError(false)
    addColor({ name, hex});
    // handleColors()
  };

  return (
    <>
    <div className="color-selector-container">
      <Name update={setName}/>
      <Color update={setHex} />
      <button className={'color-save-btn'} onClick={handleSaveColor}>Save Color</button>
    </div>
      {error && <p className={'error-text'}>Please add a name</p>}
      </>
  );
}

interface Update {
  // @TODO: implement stricter type than `any`.
  update: Dispatch<SetStateAction<any>>;
}

function Name({ update }: Update) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <div className={'color-selector-input'}>
      <input
        className="colorName"
        id="colorName"
        name="colorName"
        type="text"
        onChange={onChange}
        required
        placeholder="Enter a unique color name"
        minLength={1}
      />

    </div>
  );
}

function Color({ update }: Update) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <div className={"color-picker"}>
      <input name="color" id="color" type="color" onChange={onChange} />
    </div>
  );
}
