export const getWeather = async (city) => {
    await fetch('http://api.openweathermap.org/data/2.5/forecast?q='+ city.city +'&APPID=7ba73e0eb8efe773ed08bfd0627f07b8').then(res => res.json())
    .then((data) => {
        console.log(data.list);
    });
};
