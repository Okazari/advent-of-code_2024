import { isSafe } from "./star1";

describe("isSafe", () => {
  it("should be unsafe if data increase by more than 3", () => {
    expect(isSafe([1, 5])).toBe(false);
  });

  it("should be unsafe if data decrease by more than 3", () => {
    expect(isSafe([5, 1])).toBe(false);
  });

  it("should be unsafe is data is the same", () => {
    expect(isSafe([5, 5])).toBe(false);
  });
  describe("with only allowed steps", () => {
    it("should be safe if data is always increasing", () => {
      expect(isSafe([1, 2, 4, 7])).toBe(true);
    });

    it("should be safe if data is always decreasing", () => {
      expect(isSafe([7, 4, 2, 1])).toBe(true);
    });
  });
});
