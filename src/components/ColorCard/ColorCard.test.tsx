import { getLegibleTextColor } from "../../util";

describe("ColorCard", () => {
  it("should return legible text color for a given color", () => {
    expect(getLegibleTextColor("#000000")).toBe("white");
    expect(getLegibleTextColor("#FFFFFF")).toBe("black");
  });
});
