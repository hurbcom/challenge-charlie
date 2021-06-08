import React, { useCallback, useEffect, useState } from 'react';

import { getImageOfTheDay } from '../../services/BackgroundImageService';
import { Container } from './styles';

interface BackgroundProps {
    bg?: any;
}

const Background: React.FC<BackgroundProps> = ({ bg, children }) => {
    const [urlImage, setUrlImage] = useState<string | undefined>();

    useEffect(() => {
        getImageOfTheDay().then(url => setUrlImage(url));
    }, []);

    return <Container bg={urlImage}>{children}</Container>;
};

export default Background;
