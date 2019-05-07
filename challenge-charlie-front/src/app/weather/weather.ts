import { Temperature } from './temperature/temperature';
import { Wind } from './wind/wind';

export class Weather {

  public isOpened: boolean;

  constructor(
    public date?: string,
    public actualTemperature?: Temperature,
    public maxTemperature?: Temperature,
    public minTemperature?: Temperature,
    public text?: string,
    public wind?: Wind,
    public humidity?: number,
    public pressure?: number
  ) { }

  get averageTemperature(): Temperature {
    if (!this.maxTemperature || !this.minTemperature)
      return null;
      
    return new Temperature((this.maxTemperature.celsius + this.minTemperature.celsius) / 2);
  }

  get opacity(): number {
    return 0.05 * (this.averageTemperature != null ? this.averageTemperature.celsius % 10 : Math.random() * 10) + 0.4;
  }
  
}