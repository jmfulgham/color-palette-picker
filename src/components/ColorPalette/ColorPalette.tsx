import type { ReactElement } from "react";

import type { Color } from "../../types";

import "./ColorPalette.css";

interface Props {
  children: ReactElement<{ color: Color }>[];
}

export function ColorPalette({ children, ...props }: Props) {
  return (
    <div className="colorPalette" {...props}>
      {children}
    </div>
  );
}
