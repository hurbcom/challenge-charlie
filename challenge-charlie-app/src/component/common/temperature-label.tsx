import * as React from 'react';

export enum TEMP_UNITS
{
    KELVIN=0,
    CELSIUS,
    FAHRENHEIT
}

export interface ITemperatureLabelProps {
    kelvinValue?: number;
    unit?: TEMP_UNITS;
    fixedPoints?: number;
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export interface ITemperatureLabelState {
    unit?: TEMP_UNITS;
}

export default class TemperatureLabel extends React.Component<ITemperatureLabelProps, ITemperatureLabelState> {

  private readonly _kelvinBase = 273.15;
  
  constructor(props: ITemperatureLabelProps) {
    super(props);
    
    this.state = {
        unit: this.props.unit ?? TEMP_UNITS.KELVIN
    }
  }

  public render() {
    return (
      <div>
        {
            this.props.kelvinValue ?
            this._switchTemp(this.props.kelvinValue, this.props.unit ?? TEMP_UNITS.KELVIN)
                .toFixed(this.props.fixedPoints ? Math.floor(this.props.fixedPoints) : 0)
            : ''
        }
        <>&nbsp;</>
        <span onClick={this.props.onClick} style={{color: this.props.unit === TEMP_UNITS.CELSIUS ? 'white' : 'gray'}}>ºC</span>
        |
        <span onClick={this.props.onClick} style={{color: this.props.unit === TEMP_UNITS.FAHRENHEIT ? 'white' : 'gray'}}>ºF</span></div>
    );
  }

  private _switchTemp(kvalue: number, unit: TEMP_UNITS)
  {
    switch (unit) {
        case TEMP_UNITS.CELSIUS:
            return this._toCelsius(kvalue);
        case TEMP_UNITS.FAHRENHEIT:
            return this._toFahrenheit(kvalue);

        default:
            return kvalue;
    }
  }

  private _toCelsius(kvalue: number)
  {
    return kvalue - this._kelvinBase;
  }

  private _toFahrenheit(kvalue: number)
  {
    return (kvalue - this._kelvinBase) * 9/5 + 32;
  }
}
