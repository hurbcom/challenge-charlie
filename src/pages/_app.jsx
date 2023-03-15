import "@/styles/globals.css";
import WeatherProvider from "@/utils/weather-context";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <WeatherProvider>
            <Component {...pageProps} />
        </WeatherProvider>
    );
}
