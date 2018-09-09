import axios from "axios";

export default {
    getWallpaper() {
        return axios.get("/wallpaper").then(response => {
            return response.data;
        });
    },

    getClimate(lat, long, unit) {
        return axios
            .get(
                `https://query.yahooapis.com/v1/public/yql?q=
                          select * from weather.forecast where u='${
                              unit ? unit : "c"
                          }' 
                          and woeid in (select woeid from geo.places where text='(${lat}, ${long})')&format=json`
            )
            .then(response => {
                return response.data;
            });
    }
};
