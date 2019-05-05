import { Temperature } from './temperature/temperature';
import { Wind } from './wind/wind';

export class Weather {
  public isOpened: boolean;
  public date: string;
  public temperature: Temperature;
  public text: string;
  public wind: Wind;
  public humidity: number;
  public pressure: number;
  private _opacity: number = 0.4 * Math.random() + 0.5;

  get opacity(): number {
    return this._opacity;
  }
}