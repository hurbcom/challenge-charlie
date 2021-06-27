export default function getKmByHourFromMetersBySecond(
  meters: number,
): string {
  const kmByHour = (meters * 3.6);

  const justADecimalPoint = kmByHour.toFixed(1);

  const withOutADecimalPointIfIsZero = justADecimalPoint.replace('.0', '');

  return withOutADecimalPointIfIsZero;
}
