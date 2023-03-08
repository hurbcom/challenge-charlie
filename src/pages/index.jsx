import HeroImage from "@/components/hero-image";
import Weather from "@/components/weather";
import { getHeroImage } from "@/services/hero-image";
import React, { useCallback, useEffect, useState } from "react";

const Main = () => {
    const [imageAlt, setImageAlt] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleGetImageUrl = useCallback(async () => {
        const data = await getHeroImage();
        console.log("data:", data);
        setImageUrl(data.imageUrl);
        setImageAlt(data.imageAlt);
    }, []);

    useEffect(() => {
        handleGetImageUrl();
    }, []);

    useEffect(() => {}, [imageUrl]);

    return (
        <div className="w-full h-screen">
            {imageUrl && <HeroImage src={imageUrl} alt={imageAlt}></HeroImage>}
            <div className="w-full h-full bg-gray-900/50">
                <Weather />
            </div>
        </div>
    );
};

export default Main;
