import { WeatherData } from "@/domain/models/weather"

const weatherDataReponseMock: WeatherData = {
    "current": {
        "dt": 1681173477,
        "sunrise": 1681127528,
        "sunset": 1681173746,
        "temp": 71.47,
        "feels_like": 70.63,
        "pressure": 1024,
        "humidity": 49,
        "dew_point": 51.33,
        "uvi": 0,
        "clouds": 20,
        "wind_speed": 4.61,
        "wind_deg": 150,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "algumas nuvens",
                "icon": "02d"
            }
        ]
    },
    "daily": [
        {
            "dt": 1681149600,
            "sunrise": 1681127528,
            "sunset": 1681173746,
            "moonrise": 0,
            "moonset": 1681137420,
            "moon_phase": 0.65,
            "temp": {
                "day": 68.45,
                "min": 50.72,
                "max": 71.47,
                "night": 63.99,
                "eve": 69.73,
                "morn": 50.72
            },
            "pressure": 1025,
            "humidity": 60,
            "wind_speed": 8.08,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "nublado",
                    "icon": "04d"
                }
            ],
            "clouds": 93,
            "pop": 0.03,
            "uvi": 7.23
        },
        {
            "dt": 1681236000,
            "sunrise": 1681213852,
            "sunset": 1681260190,
            "moonrise": 1681192140,
            "moonset": 1681227000,
            "moon_phase": 0.69,
            "temp": {
                "day": 69.75,
                "min": 50.38,
                "max": 71.33,
                "night": 54.88,
                "eve": 65.8,
                "morn": 50.38
            },
            "pressure": 1025,
            "humidity": 50,
            "wind_speed": 8.41,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "nuvens dispersas",
                    "icon": "03d"
                }
            ],
            "clouds": 42,
            "pop": 0,
            "uvi": 7.59
        },
        {
            "dt": 1681322400,
            "sunrise": 1681300176,
            "sunset": 1681346635,
            "moonrise": 1681282380,
            "moonset": 1681317120,
            "moon_phase": 0.73,
            "temp": {
                "day": 69.28,
                "min": 49.71,
                "max": 69.53,
                "night": 55.54,
                "eve": 63.66,
                "morn": 49.71
            },
            "pressure": 1019,
            "humidity": 65,
            "wind_speed": 7.87,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "chuva leve",
                    "icon": "10d"
                }
            ],
            "clouds": 47,
            "pop": 0.69,
            "rain": 1.84,
            "uvi": 7.46
        },
        {
            "dt": 1681408800,
            "sunrise": 1681386501,
            "sunset": 1681433079,
            "moonrise": 1681372200,
            "moonset": 1681407600,
            "moon_phase": 0.75,
            "temp": {
                "day": 66.47,
                "min": 50.54,
                "max": 69.35,
                "night": 57.33,
                "eve": 63.97,
                "morn": 50.81
            },
            "pressure": 1013,
            "humidity": 63,
            "wind_speed": 6.11,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "chuva leve",
                    "icon": "10d"
                }
            ],
            "clouds": 88,
            "pop": 0.25,
            "rain": 0.12,
            "uvi": 7.75
        },
        {
            "dt": 1681495200,
            "sunrise": 1681472826,
            "sunset": 1681519524,
            "moonrise": 1681461540,
            "moonset": 1681498320,
            "moon_phase": 0.8,
            "temp": {
                "day": 74.97,
                "min": 53.4,
                "max": 77.65,
                "night": 63.59,
                "eve": 71.08,
                "morn": 53.4
            },
            "pressure": 1009,
            "humidity": 54,
            "wind_speed": 12.97,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "chuva leve",
                    "icon": "10d"
                }
            ],
            "clouds": 66,
            "pop": 0.63,
            "rain": 0.98,
            "uvi": 8.98
        },
        {
            "dt": 1681581600,
            "sunrise": 1681559152,
            "sunset": 1681605968,
            "moonrise": 1681550400,
            "moonset": 1681589040,
            "moon_phase": 0.84,
            "temp": {
                "day": 71.42,
                "min": 60.57,
                "max": 75.99,
                "night": 60.57,
                "eve": 68.7,
                "morn": 65.44
            },
            "pressure": 1014,
            "humidity": 86,
            "wind_speed": 11.39,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "chuva leve",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.91,
            "rain": 3.31,
            "uvi": 9
        },
        {
            "dt": 1681668000,
            "sunrise": 1681645479,
            "sunset": 1681692413,
            "moonrise": 1681638900,
            "moonset": 1681679580,
            "moon_phase": 0.87,
            "temp": {
                "day": 71.06,
                "min": 48.34,
                "max": 72.66,
                "night": 57.11,
                "eve": 65.44,
                "morn": 48.34
            },
            "pressure": 1024,
            "humidity": 34,
            "wind_speed": 8.14,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "nublado",
                    "icon": "04d"
                }
            ],
            "clouds": 91,
            "pop": 0,
            "uvi": 9
        },
        {
            "dt": 1681754400,
            "sunrise": 1681731807,
            "sunset": 1681778858,
            "moonrise": 1681727220,
            "moonset": 1681770120,
            "moon_phase": 0.91,
            "temp": {
                "day": 71.29,
                "min": 48.56,
                "max": 74.77,
                "night": 58.39,
                "eve": 67.69,
                "morn": 48.56
            },
            "pressure": 1020,
            "humidity": 43,
            "wind_speed": 7.76,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "céu limpo",
                    "icon": "01d"
                }
            ],
            "clouds": 7,
            "pop": 0,
            "uvi": 9
        }
    ]
}

export default weatherDataReponseMock