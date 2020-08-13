export function inRange(x: number, min: number, max: number): boolean {
  return ((x-min)*(x-max) <= 0);
}

export function timeToSeconds(initial: number, final: number): number {
  return (final - initial) / 1000;
}
