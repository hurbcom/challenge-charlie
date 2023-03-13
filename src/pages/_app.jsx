import "@/styles/globals.css";
import WeatherProvider from "@/utils/weather-context";

export default function MyApp({ Component, pageProps }) {
    return (
        <WeatherProvider>
            <Component {...pageProps} />
        </WeatherProvider>
    );
}
