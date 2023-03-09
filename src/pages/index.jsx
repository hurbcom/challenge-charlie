import HeroImage from "@/components/hero-image";
import Weather from "@/components/weather";
import useBingImage from "@/hooks/use-bing-image";
import useLocation from "@/hooks/use-location";
import React, { useCallback, useEffect, useState } from "react";

const Main = () => {
    const { imageAlt, imageUrl } = useBingImage();
    const location = useLocation();

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
