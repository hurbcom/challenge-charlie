export class Temperature {

  constructor(public celsius?: number) { }

  get fahrenheit(): number {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(fahrenheit: number) {
    this.celsius = (fahrenheit - 32) / 1.8;
  }

}