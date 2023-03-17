import WeatherProvider from "@/utils/weather-context";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <WeatherProvider>
                <Component {...pageProps} />
            </WeatherProvider>
            <ToastContainer />
        </>
    );
}
