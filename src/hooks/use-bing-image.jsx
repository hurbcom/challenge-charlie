import { getHeroImage } from "@/services/hero-image";
import { useCallback, useEffect, useState } from "react";

const useBingImage = () => {
    const [imageAlt, setImageAlt] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleGetImageUrl = useCallback(async () => {
        const data = await getHeroImage();
        setImageUrl(data.imageUrl);
        setImageAlt(data.imageAlt);
    }, []);

    useEffect(() => {
        handleGetImageUrl();
    }, []);

    return {
        imageAlt,
        imageUrl,
    };
};

export default useBingImage;
