#  Api Endpoints

<br />

## `/api/health`

Endpoint meant to check if the application is up and running.

<br />

_Example Request_:

GET `/api/health`

<br />

_Example Response_:

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
	"message": "ok"
}
```

<br />
<br />

---

<br />


## `/api/locality`

Returns a list of products.

_Query Parameters_:

- _latitude_ (optional, integer): Geolocation latitude value.
- _longitude_ (optional, integer): Geolocation longitude value.
- _address_ (optional, string): Location address text.

<br />

_Example Request_:

GET `/api/locality?latitude=-22.8881169&longitude=-43.2909436`

<br />

_Example Response_:

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
	"bounds": {
		"northeast": {
			"lat": -22.8875523,
			"lng": -43.2895825
		},
		"southwest": {
			"lat": -22.8901137,
			"lng": -43.2941513
		}
	},
	"components": {
		"ISO_3166-1_alpha-2": "BR",
		"ISO_3166-1_alpha-3": "BRA",
		"ISO_3166-2": [
			"BR-RJ"
		],
		"_category": "road",
		"_type": "road",
		"city": "Rio de Janeiro",
		"city_district": "Zona Norte do Rio de Janeiro",
		"continent": "South America",
		"country": "Brasil",
		"country_code": "br",
		"county": "Região Metropolitana do Rio de Janeiro",
		"municipality": "Região Geográfica Imediata do Rio de Janeiro",
		"postcode": "20771-004",
		"region": "Região Sudeste",
		"road": "Rua José dos Reis",
		"road_type": "residential",
		"state": "Rio de Janeiro",
		"state_code": "RJ",
		"state_district": "Região Geográfica Intermediária do Rio de Janeiro",
		"suburb": "Engenho de Dentro"
	},
	"confidence": 9,
	"formatted": "Rua José dos Reis, Engenho de Dentro, Rio de Janeiro - RJ, 20771-004, Brasil",
	"geometry": {
		"lat": -22.8883945,
		"lng": -43.2910969
	}
}
```

<br />
<br />

GET `/api/locality?address=rio de janeiro'`

<br />

_Example Response_:

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
	"bounds": {
		"northeast": {
			"lat": -22.7460878,
			"lng": -43.0990811
		},
		"southwest": {
			"lat": -23.0827051,
			"lng": -43.796252
		}
	},
	"components": {
		"ISO_3166-1_alpha-2": "BR",
		"ISO_3166-1_alpha-3": "BRA",
		"ISO_3166-2": [
			"BR-RJ"
		],
		"_category": "place",
		"_type": "city",
		"city": "Rio de Janeiro",
		"continent": "South America",
		"country": "Brasil",
		"country_code": "br",
		"county": "Região Metropolitana do Rio de Janeiro",
		"municipality": "Região Geográfica Imediata do Rio de Janeiro",
		"region": "Região Sudeste",
		"state": "Rio de Janeiro",
		"state_code": "RJ",
		"state_district": "Região Geográfica Intermediária do Rio de Janeiro"
	},
	"confidence": 1,
	"formatted": "Rio de Janeiro, Região Metropolitana do Rio de Janeiro, Brasil",
	"geometry": {
		"lat": -22.9110137,
		"lng": -43.2093727
	}
}
```



<br />
<br />

---

<br />

## `/api/forecast`

Endpoint meant to check if the application is up and running.

_Query Parameters_:

- _latitude_ (optional, integer): Geolocation latitude value.
- _longitude_ (optional, integer): Geolocation longitude value.

<br />

_Example Request_:

GET `/api/forecast?latitude=-22.8881169&longitude=-43.2909436`

<br />

JSON Body:
```json
{
	"browserDate": "2023-04-05 23:00:00"
    // the browserDate is meant to be 'today' date
}
```

<br />

_Example Response_:

```
HTTP/1.1 200 OK
Content-Type: application/json
```


```json
{
	"geolocation": {
		"ISO_3166-1_alpha-2": "BR",
		"ISO_3166-1_alpha-3": "BRA",
		"ISO_3166-2": [
			"BR-RJ"
		],
		"_category": "road",
		"_type": "road",
		"city": "Rio de Janeiro",
		"city_district": "Zona Norte do Rio de Janeiro",
		"continent": "South America",
		"country": "Brasil",
		"country_code": "br",
		"county": "Região Metropolitana do Rio de Janeiro",
		"municipality": "Região Geográfica Imediata do Rio de Janeiro",
		"postcode": "20771-004",
		"region": "Região Sudeste",
		"road": "Rua José dos Reis",
		"road_type": "residential",
		"state": "Rio de Janeiro",
		"state_code": "RJ",
		"state_district": "Região Geográfica Intermediária do Rio de Janeiro",
		"suburb": "Engenho de Dentro",
		"formatted": "Rua José dos Reis, Engenho de Dentro, Rio de Janeiro - RJ, 20771-004, Brasil"
	},
	"forecast": [
		{
			"dayText": "HOJE",
			"unixTime": 1680706800,
			"date": "2023-04-05 15:00:00",
			"tempColor": "yellow",
			"temp": "29°C",
			"temp_min": "28°C",
			"temp_max": "29°C",
			"feels_like": "32°C",
			"pressure": "1014hPA",
			"humidity": "71%",
			"windSpeed": 2.16,
			"windDirection": "SE",
			"windFull": "SE 2.16km/h",
			"icon": "03d",
			"description": "Nuvens dispersas"
		},
		{
			"dayText": "AMANHÃ",
			"unixTime": 1680750000,
			"date": "2023-04-06 03:00:00",
			"tempColor": "yellow",
			"temp": "22°C",
			"temp_min": "22°C",
			"temp_max": "22°C",
			"feels_like": "23°C",
			"pressure": "1015hPA",
			"humidity": "88%",
			"windSpeed": 0.44,
			"windDirection": "N",
			"windFull": "N 0.44km/h",
			"icon": "01n",
			"description": "Céu limpo"
		},
		{
			"dayText": "DEPOIS DE AMANHÃ",
			"unixTime": 1680836400,
			"date": "2023-04-07 03:00:00",
			"tempColor": "yellow",
			"temp": "23°C",
			"temp_min": "23°C",
			"temp_max": "23°C",
			"feels_like": "24°C",
			"pressure": "1015hPA",
			"humidity": "89%",
			"windSpeed": 1.22,
			"windDirection": "NE",
			"windFull": "NE 1.22km/h",
			"icon": "10n",
			"description": "Chuva leve"
		}
	]
}
```

<br />
<br />

---

<br />

## `/api/backgroundImage`

Retrieve Bing Daily Image url address.

<br />

_Example Request_:

GET `/api/backgroundImage`

<br />

_Example Response_:

```
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
	"url": "https://www.bing.com/th?id=OHR.RomanBridge_PT-BR9293657431_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
}
```

<br />
<br />

---

<br />