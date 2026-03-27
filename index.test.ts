import { expect, test } from "bun:test";
import { hitungPythagoras } from "./math";

test("Matematika dasar Pythagoras", () => {
  const a = 3;
  const b = 4;
  const c = hitungPythagoras(a, b);
  expect(c).toBe(5);
});