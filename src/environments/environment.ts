// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bingUrl: '/bing',
  openWeatherMap: 'http://api.openweathermap.org/data/2.5/weather?&units=metric&lang=pt_br&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&q=',
  openWeatherMapForecast: 'http://api.openweathermap.org/data/2.5/forecast?cnt=21&units=metric&lang=pt_br&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&q=',
  openCageData: 'https://api.opencagedata.com/geocode/v1/json?pretty=1&key=c63386b4f77e46de817bdf94f552cddf&q=',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
