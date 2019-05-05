export class Weather {
  public isOpened: boolean;
  public date: string;
  public text: string;
  public wind: string;
  public humidity: number;
  public pressure: string;
  private _celsius: number;
  private _opacity: number = 0.4 * Math.random() + 0.5;

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

  get opacity(): number {
    return this._opacity;
  }
}