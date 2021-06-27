export default function getNearestNumber(
  value: number,
  valuesToCompare: number[],
): number {
  return valuesToCompare.reduce(
    (previous, actual) => (Math.abs(actual - value) < Math.abs(previous - value)
      ? actual
      : previous
    ),
  );
}
