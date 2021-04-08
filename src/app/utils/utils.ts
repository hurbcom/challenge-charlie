import { dictionary } from './translationDictionary';
import { iconsDictionary } from './iconDictionary';

export const Utils =
{
	CELSIUS: 'metric',
	FAHRENHEIT: 'imperial',
	RAIN_SKY_URL_IMG: '../../../assets/imgs/rain.png',
	SNOW_SKY_URL_IMG: '../../../assets/imgs/snow-sky.png',
	CLEAR_SKY_URL_IMG: '../../../assets/imgs/clear-sky.png',
	CLOUD_SKY_URL_IMG: '../../../assets/imgs/cloud-sky.png',
	NAVBAR_MENU:
		[
			{ key: 1, title: 'Hoje' },
			{ key: 2, title: 'A cada hora' },
			{ key: 3, title: 'Detalhes' },
			{ key: 4, title: 'Fim de semana' },
			{ key: 5, title: 'Mensal' },
			{ key: 6, title: 'Mais previsões' },
		],

	roundWeather(data: number): string
	{
		return (Math.round(data * 100) / 100).toFixed(0);
	},
	translateConditions(condition: string): string {
		return dictionary[condition];
	},
	setTempNumberColor(temperature: number, unit: string): string {
		const hotColor = 'hot-temp';
		const coldColor = 'cold-temp';
		const warmColor = 'warm-temp';

		if ((unit === this.CELSIUS && temperature <= 15) ||
			(unit === this.FAHRENHEIT && temperature <= 59)) {
			return coldColor;
		}
		else if ((unit === this.CELSIUS && temperature >= 35) ||
			(unit === this.FAHRENHEIT && temperature >= 95)) {
			return hotColor;
		}
		else {
			return warmColor;
		}
	},
	formatTime(fullTimeText: string): string
	{
		return fullTimeText.substring(11, 13);
	},
	setBackgroundImage(mainInfo: string): void
	{
		const clearSky = 'assets/imgs/soft_clouds_sky.jpg';
		const rainSky = `url('assets/imgs/rain_sky.jpg')`;
		const snowSky = `url('assets/imgs/snow_sky.jpg')`;
		const cloudSky = `url('assets/imgs/clouds-sky.jpg')`;
		const body: any = document.getElementById('weather-body');
		switch (mainInfo) {
			case 'Rain':
				body.style.backgroundImage = rainSky;
				break;

			case 'Clouds':
				body.style.backgroundImage = cloudSky;
				break;

			case 'Snow':
				body.style.backgroundImage = snowSky;
				break;

			case 'Clear':
				body.style.backgroundImage = clearSky;
				break;

			default:
				body.style.backgroundImage = clearSky;
				break;
		}
	},
	getWeatherIcon(condition: string): string
	{
		return iconsDictionary[condition];
	}
};
