export const fakeLocation = (code, latitude, longitude) => {
    return {
        onBeforeLoad(win) {
            cy.stub(
                win.navigator.geolocation,
                'getCurrentPosition',
                (cb, err) => {
                    if (latitude && longitude) {
                        return cb({ coords: { latitude, longitude } })
                    }
                    throw err({ code }) // 1: denied, 2: not found
                }
            )
        },
    }
}

export const weatherData = (temp1, temp2, temp3) => {
    return {
        current: {
            humidity: 55,
            pressure: 1015,
            temp: temp1,
            weather: [
                {
                    id: 802,
                    description: 'nuvens dispersas',
                },
            ],
            wind_deg: 120,
            wind_speed: 5,
        },
        daily: [
            {},
            {
                temp: { day: temp2 },
                weather: [
                    {
                        id: 500,
                        description: 'chuva leve',
                    },
                ],
            },
            {
                temp: { day: temp3 },
                weather: [
                    {
                        id: 800,
                        description: 'céu limpo',
                    },
                ],
            },
        ],
    }
}
