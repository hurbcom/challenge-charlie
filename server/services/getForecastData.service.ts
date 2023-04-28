export default async function getForecastData(location: string) {
    const url = `${process.env.OPEN_WEATHER_API_URL}?q=${location}&units=metric&lang=pt_br&APPID=${process.env.OPEN_WEATHER_API_KEY}`;
    const response = await fetch(url);

    const data = await response.json();
    if(!response?.ok) {
        throw data;    
    }

    const { list } = data;

    if (!list || list.length < 1) {
        throw new Error(`Forecast not found. Searched location: ${location}`);
    }

    const forecasts = list.slice(0, 3);
    
    return [
        { ...forecasts[0], day: "HOJE" },
        { ...forecasts[1], day: "AMANHÃ" },
        { ...forecasts[2], day: "DEPOIS DE AMANHÃ" },
    ];
}
