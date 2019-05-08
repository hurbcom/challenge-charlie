import { Temperature } from './temperature/temperature';
import { Wind } from './wind/wind';

export class Weather {

  public isOpened: boolean;
  public averageTemperature: Temperature;
  public opacity: number;

  constructor(
    public date?: string,
    public actualTemperature?: Temperature,
    public maxTemperature?: Temperature,
    public minTemperature?: Temperature,
    public text?: string,
    public wind?: Wind,
    public humidity?: number,
    public pressure?: number,
    public icon?: number
  ) {
    if (this.maxTemperature && this.minTemperature)
      this.averageTemperature = new Temperature((this.maxTemperature.celsius + this.minTemperature.celsius) / 2);

    this.opacity = 0.03 * (this.averageTemperature != null ? this.averageTemperature.celsius % 10 : Math.random() * 10) + 0.6;
  }
  
}