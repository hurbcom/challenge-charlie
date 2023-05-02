const forecastObject = {
    weather: [
        {
            icon: "",
            description: "",
        },
    ],
    main: {
        temp: 0,
        pressure: 0,
        humidity: 0,
    },
    wind: {
        speed: 0,
        deg: 0,
    },
};

export const initialForecastState = [
    {
        ...forecastObject,
        day: "HOJE",
    },
    {
        ...forecastObject,
        day: "AMANHÃ",
    },
    {
        ...forecastObject,
        day: "DEPOIS DE AMANHÃ",
    },
];

const getForecast = async (location: string) => {
    if (!location) {
        return Promise.resolve(initialForecastState);
    }

    const response = await fetch(
        `${
            window.isServer ? process.env.APP_URL : ""
        }/get-forecast?q=${location}`
    );

    if (!response.ok) {
        throw new Error("Can't get forecast info");
    }

    return response.json();
};

export default getForecast;
