// math.ts
export function calculatePythagorean(a: number, b: number): number {
  return Math.sqrt(a**2 + b**2);
}

/**
 * @deprecated Use calculatePythagorean instead.
 */
export function hitungPythagoras(a: number, b: number): number {
  return calculatePythagorean(a, b);
}