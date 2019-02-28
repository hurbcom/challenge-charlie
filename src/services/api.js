import axios from "axios";
import * as CryptoJS from 'crypto-js';



export default {
    getWallpaper() {
        return axios
            .get(`https://cors.io?http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`)
            .then(response => {
                return response.data;
            });
    },

    getClimate(lat, long) {
        // api yahoo
        let url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
        let method = 'GET';
        let app_id = 'ASpGMX54';
        let consumer_key = 'dj0yJmk9eWt4QjNlbjVVZmJZJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTUy';
        let consumer_secret = '9bf04d1c4b1f102de53a56822f16ecdb608554ba';
        let concat = '&';
        let query = { 'lat': `${lat}`, 'lon': `${long}`, 'format': 'json' };
        let oauth = {
            'oauth_consumer_key': consumer_key,
            'oauth_nonce': Math.random().toString(36).substring(2),
            'oauth_signature_method': 'HMAC-SHA1',
            'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
            'oauth_version': '1.0'
        };

        let merged = {};
        var extend = function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                if (!arguments[i])
                    continue;

                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key))
                        out[key] = arguments[i][key];
                }
            }

            return out;
        };

        extend(merged, query, oauth);
        let merged_arr = Object.keys(merged).sort().map(function(k) {
            return [k + '=' + encodeURIComponent(merged[k])];
        });
        let signature_base_str = method +
            concat + encodeURIComponent(url) +
            concat + encodeURIComponent(merged_arr.join(concat));

        let composite_key = encodeURIComponent(consumer_secret) + concat;
        let hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
        let signature = hash.toString(CryptoJS.enc.Base64);

        oauth['oauth_signature'] = signature;
        let auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
            return [k + '="' + oauth[k] + '"'];
        }).join(',');
        let config = {
            headers: { 'Authorization': auth_header, 'Yahoo-App-Id': app_id }
        };
        return axios
            .get(url + '?' + `lat=${query.lat}&lon=${query.lon}&format=${query.format}`, config)
            .then(response => {
                return response.data;
            });

    }
};