import OAuth from 'oauth';

const app_id = 'sUWtz55g';
const consumer_key = 'dj0yJmk9ZVlub3h4YmNLN1E0JmQ9WVdrOWMxVlhkSG8xTldjbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWQx';
const consumer_secret = '11b4632f9c0d952eb28a040ee4c402359ba25e9f';

const header = {
    'X-Yahoo-App-Id': app_id
};

const request = new OAuth.OAuth(
    null,
    null,
    consumer_key,
    consumer_secret,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

function getWeather() {
    let lon, lat;
    let url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            url = `https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${lat}&lon=${lon}`;
        });
    }

    return new Promise((resolve, reject) => {
        request.get(
            url,
            null,
            null,
            function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                    console.log(data);
                }
            }
        );
    });
}

export { getWeather };