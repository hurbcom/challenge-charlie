export interface IWeatherGradient<ColorData>
{
    base: ColorData;
    lighter: ColorData;
    darker: ColorData;
}

export type colorHex = string;

export class HexWeatherGradient implements IWeatherGradient<colorHex>
{
    constructor(
        public base: colorHex,
        public lighter: colorHex,
        public darker: colorHex,
    ) {}
}