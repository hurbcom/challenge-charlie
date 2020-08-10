
class OpenCage {
    constructor(key) {
        this.key = key;
    }

    getGeoCode(city, callback) {
        this.cacheKey = this.getCacheKey(city);
        const fromCache = this.getFromCache();

        if (fromCache) {
            callback(fromCache);
        } else {
            const url = this.createUrl(city);

            this.fetch(url)
                .then((data) => {
                    this.saveCache(data.geometry);
                    callback(data.geometry)
                });
        }
    }

    getCityName(lat, long, callback) {
        const q = `${lat},${long}`;

        this.cacheKey = this.getCacheKey(q);
        const fromCache = this.getFromCache();

        if (fromCache) {
            callback(fromCache);
        } else {
            const url = this.createUrl(q);

            this.fetch(url)
                .then((data) => {
                    this.saveCache(data.components.city);
                    callback(data.components.city)
                });
        }
    }

    createUrl(q) {
        let url = new URL('https://api.opencagedata.com/geocode/v1/json');
        const params = {
            q: q,
            key: this.key,
            language: 'en',
            limit: 1,
            no_annotations: 1
        };

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        return url;
    }

    fetch(url) {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => Promise.resolve(data.results[0]));
    }

    getCacheKey(q) {
        q = q.toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

        const cacheKey = `opencage_${q}`;
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
        const nextYear = new Date();
        nextYear.setYear(nextYear.getFullYear() + 1);

        const cacheObj = {
            expire: nextYear,
            data: result
        };

        window.localStorage.setItem(this.cacheKey, JSON.stringify(cacheObj));
    }
}

export default OpenCage;