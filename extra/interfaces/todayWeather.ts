export interface TodayWeatherInterface {
    temp:number,
    id:number,
    description:string,
    unit:string,
    windDeg:number,
    windSpeed:number,
    humidity:number,
    pressure:number
    click?:React.MouseEventHandler
}