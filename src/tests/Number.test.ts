import { expect, test } from "vitest";
import { minus, multi, plus } from "../utils/Number";

test("adds 1 + 2 to equal 3", () => {
  expect(plus(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(minus(2, 1)).toBe(1);
});

test("multiplies 2 * 3 to equal 6", () => {
  expect(multi(2, 3)).toBe(6);
});
