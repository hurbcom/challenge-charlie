import React, { useEffect, useState } from 'react';

import { getImageOfTheDay } from '../../services/BackgroundImageService';
import { Container } from './styles';

const Background: React.FC = ({ children }) => {
    const [urlImage, setUrlImage] = useState<string | undefined>();

    useEffect(() => {
        getImageOfTheDay().then(url => setUrlImage(url));
    }, []);

    return <Container bg={urlImage}>{children}</Container>;
};

export default Background;
