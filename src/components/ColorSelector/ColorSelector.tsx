import { useState } from "react";
import type {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactEventHandler,
  SetStateAction,
} from "react";

import type { Color, HexColor } from "../../types/colors.tsx";

import "./ColorSelector.css";

interface Props {
  addColor: (color: Color) => void;
}

export function ColorSelector({ addColor}: Props) {
  const [name, setName] = useState("");

  // @TODO: augment `hex` state to support multiple color formats.
  const [hex, setHex] = useState<HexColor>("#000000");

  const handleSaveColor = () => {
    addColor({ name, hex, rating: 0 });
  };

  return (
    // @TODO: re-implement without `form` element and `onSubmit` method.
    <div className="colorSelector">
      <Name update={setName} />
      <Color update={setHex} />
      <div>
        <button onClick={handleSaveColor}>Save Color</button>
      </div>
    </div>
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
    <div>
      <label htmlFor="colorName">Color name:</label>
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
    <div>
      <label htmlFor="color">Color:</label>
      <input name="color" id="color" type="color" onChange={onChange} />
    </div>
  );
}
