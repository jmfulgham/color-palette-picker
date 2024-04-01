export interface Color {
  name: string;
  hex: HexColor;
}
export type HexColor = `#${string}`;
