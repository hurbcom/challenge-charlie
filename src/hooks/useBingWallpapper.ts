import { useState } from "react";

type WallpapperType = {
    url: string;
    copyright?: string;
    copyrightlink: string;
}

const useBingWallpapper = () => {
    const [wallpapper, setWallpappper] = useState<WallpapperType | undefined>(undefined);
    const [error, setError] = useState<any>(undefined);

    const handleResult = async (response: Response) => {
        const data = await response.json();
        const wallpapper = {
            url: `${process.env.BING_WALLPAPPER_API_BASE_URL ?? ""}${data.images[0].url}`,
            copyright: data.images[0].copyright,
            copyrightlink: data.images[0].copyrightlink,
        };
        setWallpappper(wallpapper);
    }

    const onError = (data: any) => {
        setError(data);
    }

    const loadWallpaperOfDay = async () => {
        fetch("/bing-wallpapper")
            .then(handleResult)
            .catch(onError);
    };


    return {
        loadWallpaperOfDay,
        wallpapper,
        error
    };
};

export default useBingWallpapper;
