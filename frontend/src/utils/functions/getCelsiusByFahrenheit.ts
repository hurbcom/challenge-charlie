export default function getCelsiusByFahrenheit(fahrenheit: number): number {
  return Math.round((fahrenheit - 32) / 1.8);
}
