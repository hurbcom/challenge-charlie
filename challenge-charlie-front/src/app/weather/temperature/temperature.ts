export class Temperature {
  private _celsius: number;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(celsius: number) {
    this._celsius = celsius;
  }

  get fahrenheit(): number {
    return this._celsius * 1.8 + 32;
  }

  set fahrenheit(fahrenheit: number) {
    this.celsius = (fahrenheit - 32) / 1.8;
  }
}