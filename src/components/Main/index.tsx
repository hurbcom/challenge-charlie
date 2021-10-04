import React, { useState, useEffect } from 'react';
import ImageService from 'services/ImageService';
import * as S from './styles';

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    const [bgImage, setBgImage] = useState<string | undefined>();

    const getBgImage = async () => {
        try {
            const image = await ImageService.getImageFromBing();
            setBgImage(image);
        } catch (error) {
            console.error('ocorreu um erro ao buscar a imagem de fundo');
        }
    };

    useEffect(() => {
        getBgImage();
    }, []);

    return <S.Container bgImage={bgImage}>{children}</S.Container>;
};

export default Main;
