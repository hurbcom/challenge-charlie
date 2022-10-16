import axios from 'axios';
import { useEffect, useState } from 'react';

interface BackgroundImageBingProps {
    loaded: boolean
    imgUrl?: string
    error?: {
        message: string
    }
}

const useBackgroundImageBing = () => {
    const [backgroundImage, setBackgroundImage] = useState<BackgroundImageBingProps>({
        loaded: false
    });

    useEffect(() => {
        axios.get(
            "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
        )
        .then((response) => {
            setBackgroundImage ({
                loaded: true,
                imgUrl: `https://www.bing.com${response.data.images[0].url}`,
            });
        }).catch((error) => {
            setBackgroundImage ({
                loaded: false,
                error: {
                    message: error.message,
                }
            });
        });
    }, []);

    return backgroundImage;
};

export default useBackgroundImageBing;
