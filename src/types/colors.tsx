export interface Color {
  name: string;
  hex: HexColor;
}
export type HexColor = `#${string}`;

export type RGB = {
  r: number,
  g: number,
  b: number,
}