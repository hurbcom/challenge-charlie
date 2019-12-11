export default function formatSpecialChar(string) {
  string = string.replace(/[áàãâä]/g, 'a');
  string = string.replace(/[éèêë]/g, 'e');
  string = string.replace(/[í]/g, 'i');
  string = string.replace(/[óòõôö]/g, 'o');
  string = string.replace(/[úùûü]/g, 'u');
  string = string.replace(/[ç]/g, 'c');
  return string;
}
