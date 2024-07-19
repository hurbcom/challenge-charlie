const weatherIconDictonary: {
  [key: number]: string;
} = {};

//It's following the weather conditions for the open weather api.
//https://openweathermap.org/weather-conditions
//I'm using meteocons to convert it to icons
//https://www.alessioatzeni.com/meteocons/

//Group 2xx: Thunderstorm
weatherIconDictonary[200] = "0";
weatherIconDictonary[201] = "0";
weatherIconDictonary[202] = "0";
weatherIconDictonary[210] = "0";
weatherIconDictonary[211] = "0";
weatherIconDictonary[212] = "0";
weatherIconDictonary[221] = "0";
weatherIconDictonary[230] = "0";
weatherIconDictonary[231] = "0";
weatherIconDictonary[232] = "0";

//Group 3xx: Drizzle
weatherIconDictonary[300] = "Q";
weatherIconDictonary[301] = "Q";
weatherIconDictonary[302] = "Q";
weatherIconDictonary[310] = "Q";
weatherIconDictonary[311] = "Q";
weatherIconDictonary[312] = "Q";
weatherIconDictonary[313] = "Q";
weatherIconDictonary[314] = "Q";
weatherIconDictonary[321] = "Q";

//Group 5xx: Rain
weatherIconDictonary[500] = "R";
weatherIconDictonary[501] = "R";
weatherIconDictonary[502] = "R";
weatherIconDictonary[503] = "R";
weatherIconDictonary[504] = "R";
weatherIconDictonary[511] = "W";
weatherIconDictonary[520] = "R";
weatherIconDictonary[521] = "R";
weatherIconDictonary[522] = "R";
weatherIconDictonary[531] = "R";

//Group 6xx: Snow
weatherIconDictonary[600] = "G";
weatherIconDictonary[601] = "G";
weatherIconDictonary[602] = "G";
weatherIconDictonary[611] = "G";
weatherIconDictonary[612] = "G";
weatherIconDictonary[613] = "G";
weatherIconDictonary[615] = "G";
weatherIconDictonary[616] = "G";
weatherIconDictonary[620] = "G";
weatherIconDictonary[621] = "G";
weatherIconDictonary[622] = "G";

//Group 7xx: Atmosphere
weatherIconDictonary[701] = "M";
weatherIconDictonary[711] = "M";
weatherIconDictonary[721] = "M";
weatherIconDictonary[731] = "M";
weatherIconDictonary[741] = "M";
weatherIconDictonary[751] = "M";
weatherIconDictonary[761] = "M";
weatherIconDictonary[762] = "M";
weatherIconDictonary[771] = "M";
weatherIconDictonary[781] = "M";

//Group 800: Clear
weatherIconDictonary[800] = "B";

//Group 80x: Clouds
weatherIconDictonary[801] = "H";
weatherIconDictonary[802] = "N";
weatherIconDictonary[803] = "Y";
weatherIconDictonary[804] = "Y";

export default weatherIconDictonary;
