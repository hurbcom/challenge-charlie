import HeroImage from "@/components/hero-image";
import Weather from "@/components/weather";
import useLocation from "@/hooks/use-location";
import { getHeroImage } from "@/services/hero-image";
import { WeatherContext } from "@/utils/weather-context";
import Head from "next/head";
import { useContext, useEffect } from "react";

const Main = ({ image }) => {
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
                <title>Charlie's Weather Widget</title>
            </Head>
            <div className="w-full h-screen max-w-screen max-h-screen">
                {image && (
                    <HeroImage src={image.url} alt={image.alt}></HeroImage>
                )}
                <main className="w-full h-full bg-gray-900/60">
                    <Weather />
                </main>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const image = await getHeroImage()
    return {
        props: { image },
        // recria a pagina do cache no minimo a cada 8 horas, ja que a api do bing retorna uma imagem diferente todo dia
        revalidate: 60 * 60 * 8
    }
}

export default Main;
