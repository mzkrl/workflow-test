// math.test.ts
import { expect, test } from "bun:test";
import { hitungPythagoras } from "./math";

test("calculates Pythagorean theorem for 3 and 4 to equal 5", () => {
  expect(hitungPythagoras(3, 4)).toBe(5);
});