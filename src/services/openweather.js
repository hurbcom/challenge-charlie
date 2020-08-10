
class OpenWeather {
    constructor(APPID) {
        this.APPID = APPID;
    }

    getWeatherByGeoCode(geoCode, callback) {
        this.cacheKey = this.getCacheKey(geoCode);
        const fromCache = this.getFromCache();

        if (fromCache) {
            callback(fromCache);
        } else {
            const url = this.createUrl(geoCode);
            this.fetch(url, callback);
        }
    }

    createUrl(geoCode) {
        let url = new URL('http://api.openweathermap.org/data/2.5/onecall');
        const params = {
            lat: geoCode.lat,
            lon: geoCode.lng,
            APPID: this.APPID,
            lang: 'pt_br',
            units: 'metric',
            exclude: 'hourly,minutely'
        };

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        return url;
    }

    fetch(url, callback) {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.saveCache(data.daily);
                callback(data.daily);
            });
    }

    getCacheKey(geoCode) {
        const cacheKey = `openweather_${geoCode.lat}${geoCode.lng}`;
        return cacheKey;
    }

    getFromCache() {
        const result = window.localStorage.getItem(this.cacheKey);

        if (result) {
            const now = new Date();
            const cacheObj = JSON.parse(result);

            if (now > new Date(cacheObj.expire)) {
                window.localStorage.removeItem(this.cacheKey);
            } else {
                return cacheObj.data;
            }
        }
    }

    saveCache(result) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0,0,0,0);

        const cacheObj = {
            expire: tomorrow,
            data: result
        };

        window.localStorage.setItem(this.cacheKey, JSON.stringify(cacheObj));
    }
}

export default OpenWeather;