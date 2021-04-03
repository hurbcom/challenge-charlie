import { dictionary } from './translationDictionary';
import { iconsDictionary } from './iconDictionary';

export const Utils =
{
    CELCIUS: "metric",
	FAHRENHEIT: "imperial",
	RAIN_SKY_URL_IMG: "../../../assets/imgs/rain.png",
	SNOW_SKY_URL_IMG: "../../../assets/imgs/snow-sky.png",
	CLEAR_SKY_URL_IMG: "../../../assets/imgs/clear-sky.png",
	CLOUD_SKY_URL_IMG: "../../../assets/imgs/cloud-sky.png",
	NAVBAR_MENU:
	[
		{ key: 1, title:"Hoje" },
		{ key: 2, title:"A cada hora" },
		{ key: 3, title:"Detalhes" },
		{ key: 4, title:"Fim de semana" },
		{ key: 5, title:"Mensal" },
		{ key: 6, title:"Mais previsões" },
	],

    roundWeather(data: number)
	{
		return (Math.round(data * 100) / 100).toFixed(0);
	},
    translateConditions(condition: string): string
	{
		return dictionary[condition];
	},
    setTempNumberColor(temperature: number, unit: string): string
	{
		let hotColor = "hot-temp";
		let coldColor = "cold-temp";
		let warmColor = "warm-temp";

		if((unit == this.CELCIUS && temperature <= 15) || 
			(unit == this.FAHRENHEIT && temperature <= 59))
		{
			return coldColor;
		}
		else if((unit == this.CELCIUS && temperature >= 35) || 
				(unit == this.FAHRENHEIT && temperature >= 95))
		{
			return hotColor;
		}
		else
		{
			return warmColor;
		}
	},
	formatTime(fullTimeText: string)
	{
		return fullTimeText.substring(11, 13);
	},
	setBackgroundImage(mainInfo: string): void
	{
		let clear_sky = "assets/imgs/soft_clouds_sky.jpg";
		let rain_sky = "url('assets/imgs/rain_sky.jpg')";
		let snow_sky = "url('assets/imgs/snow_sky.jpg')";
		let cloud_sky = "url('assets/imgs/clouds-sky.jpg')";
		let body: any = document.getElementById("weather-body");
		switch(mainInfo)
		{
			case "Rain":
				body.style.backgroundImage = rain_sky;
				break;

			case "Clouds":
				body.style.backgroundImage = cloud_sky;
				break;

			case "Snow":
				body.style.backgroundImage = snow_sky;
				break;

			case "Clear":
				body.style.backgroundImage = clear_sky;
				break;

			default:
				body.style.backgroundImage = clear_sky;
				break;
		}
	},
	getWeatherIcon(condition: string)
	{
		return iconsDictionary[condition];
	}
}