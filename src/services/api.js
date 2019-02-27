import axios from "axios";

import $ from "jquery";
import * as CryptoJS from 'crypto-js';

// api yahoo
var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
var method = 'GET';
var app_id = 'ASpGMX54';
var consumer_key = 'dj0yJmk9eWt4QjNlbjVVZmJZJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTUy';
var consumer_secret = '9bf04d1c4b1f102de53a56822f16ecdb608554ba';
var concat = '&';
var query = { 'lat': '-22.9707', 'lon': '-43.1823', 'format': 'json' };
var oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
};

var merged = {};
$.extend(merged, query, oauth);
var merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
});
var signature_base_str = method +
    concat + encodeURIComponent(url) +
    concat + encodeURIComponent(merged_arr.join(concat));

var composite_key = encodeURIComponent(consumer_secret) + concat;
var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
var signature = hash.toString(CryptoJS.enc.Base64);

oauth['oauth_signature'] = signature;
var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
    return [k + '="' + oauth[k] + '"'];
}).join(',');


$.ajax({
    url: url + '?' + $.param(query),
    headers: {
        'Authorization': auth_header,
        'Yahoo-App-Id': app_id
    },
    method: 'GET',
    success: function(data) {
        var locationWeather = data;
    }
});


var config = {
    headers: { 'X-My-Custom-Header': 'Header-Value' }
};


export default {
    getWallpaper() {
        return axios
            .get(
                `https://cors.io?http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`
            )
            .then(response => {
                return response.data;
            });
    },

    getClimate(lat, long, unit) {
        return axios
            .get(
                `https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=-22.970722&lon=-43.182365&format=json&oauth_consumer_key=dj0yJmk9eWt4QjNlbjVVZmJZJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTUy&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1551215222&oauth_nonce=NGAFFF6kPf3&oauth_version=1.0&oauth_signature=NEDmBKWgu400hp7Son42eZoPUEI=`
            )
            .then(response => {
                return response.data;
            });
    }
};