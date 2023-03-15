import "@/styles/globals.css";
import WeatherProvider from "@/utils/weather-context";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <WeatherProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </WeatherProvider>
    );
}
