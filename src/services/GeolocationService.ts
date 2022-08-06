export class GeolocationService {
    public static reverseGeocode = async (lat: number, lng: number) => {
        const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=c63386b4f77e46de817bdf94f552cddf&language=pt_BR`
        );
        return await response.json();
    };

    public static getUserLocation = async () => {
        const geolocation = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) =>
                this.reverseGeocode(pos.coords.latitude, pos.coords.longitude)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            );
        });
        return geolocation as Promise<any>;
    };

    public static getWeather = async (lat: number, lng: number) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=772920597e4ec8f00de8d376dfb3f094&lang=pt_BR`
        );
        return await response.json();
    };
}
