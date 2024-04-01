export interface Color {
  name: string;
  hex: HexColor;
  rating: Rating;
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
export type HexColor = `#${string}`;
