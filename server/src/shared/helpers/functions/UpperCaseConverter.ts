export default function UpperCaseConverter(value: string) {
  return value.replace(/^\w|\s\w/g, (c) => c.toUpperCase());
}
