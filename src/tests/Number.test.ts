import { expect, test } from "vitest";
import { minus, plus } from "../utils/Number";

test("adds 1 + 2 to equal 3", () => {
  expect(plus(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(minus(2, 1)).toBe(1);
});
