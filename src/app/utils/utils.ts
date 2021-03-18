import { dictionary } from './translationDictionary';

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
    setBackgroundColor(temperature: number, unit: string)
	{
		let body: any = document.getElementById("weather-body");
		let hotBackground = "-webkit-gradient(linear,left top,left bottom,color-stop(9%,#e70c0c),to(#fdd211))";
		let coldBackground = "-webkit-gradient(linear,left top,left bottom,color-stop(9%,#094af0),to(#d2d6f5))";
		let warmBackground = "-webkit-gradient(linear,left top,left bottom,color-stop(9%,#f8ab31),to(#f7d760))";
		// let nightBackground = "-webkit-gradient(linear,left top,left bottom,color-stop(9%,#1a357c),to(#99479b))";

		if((unit == this.CELCIUS && temperature <= 15) || 
			(unit == this.FAHRENHEIT && temperature <= 59))
		{
			body.style.backgroundImage = coldBackground;
		}
		else if((unit == this.CELCIUS && temperature >= 35) || 
				(unit == this.FAHRENHEIT && temperature >= 95))
		{
			body.style.backgroundImage = hotBackground;
		}
		else
		{
			body.style.backgroundImage = warmBackground;
		}
	},
	formatTime(fullTimeText: string)
	{
		return fullTimeText.substring(10, 16);
	},
	setBackgroundImage(mainInfo: string): string
	{
		switch(mainInfo)
		{
			case "Rain":
				return this.RAIN_SKY_URL_IMG;

			case "Clouds":
				return this.CLOUD_SKY_URL_IMG;

			case "Snow":
				return this.SNOW_SKY_URL_IMG;

			default:
				return this.CLEAR_SKY_URL_IMG;
		}
	}
}