import { useEffect, useState } from "react";
import { ImageService } from "../../services/ImageService";
import { BackgroundImg } from "./styled";

interface IBackground {
    children: React.ReactNode;
}

const Background = ({ children }: IBackground) => {
    const [background, setBackground] = useState<string>();

    const getBackgroundImage = async () => {
        await ImageService.getImage()
            .then((image) => {
                setBackground(image);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getBackgroundImage();
    }, []);

    return <BackgroundImg img={background}>{children}</BackgroundImg>;
};

export default Background;
