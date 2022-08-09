import { useEffect, useState } from "react";
import { ImageService } from "../../services/ImageService";
import Loader from "../Loader";
import { BackgroundImg, Wrapper } from "./styled";

interface IBackground {
    children: React.ReactNode;
}

const Background = ({ children }: IBackground) => {
    const [isLoading, setIsLoading] = useState(true);
    const [background, setBackground] = useState<string>();

    const getBackgroundImage = async () => {
        try {
            const response = await ImageService.getImage();
            setBackground(response);
            setIsLoading(false);
        } catch (error) {
            setBackground("/bing.jpeg");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBackgroundImage();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Wrapper>
                    <BackgroundImg img={background}>{children}</BackgroundImg>
                </Wrapper>
            )}
        </>
    );
};

export default Background;
