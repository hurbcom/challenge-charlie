import HeroImage from "@/components/hero-image";
import Weather from "@/components/weather";
import useBingImage from "@/hooks/use-bing-image";
import useLocation from "@/hooks/use-location";
import { WeatherContext } from "@/utils/weather-context";
import Head from "next/head";
import { useContext, useEffect } from "react";

const Main = () => {
    const { imageAlt, imageUrl } = useBingImage();
    const { geolocation } = useLocation();
    const { city, setCity, handleGetWeather } = useContext(WeatherContext);

    useEffect(() => {
        if (geolocation && !city) {
            const cityString = `${geolocation.city}, ${geolocation.state}`;
            setCity(cityString);
            handleGetWeather(cityString);
        }
    }, [geolocation]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="w-full h-screen max-w-screen max-h-screen">
                {imageUrl && (
                    <HeroImage src={imageUrl} alt={imageAlt}></HeroImage>
                )}
                <main className="w-full h-full bg-gray-900/60">
                    <Weather />
                </main>
            </div>
        </>
    );
};

export default Main;
