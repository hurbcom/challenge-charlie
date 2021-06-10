import React from 'react';

import { Container } from './styles';

interface WeatherDetailsProps {
    label?: string;
    content?: string | number;
    value?: string;
    altImage?: string;
    imageSource?: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
    label,
    content,
    value,
    altImage,
    imageSource,
}) => {
    return (
        <Container>
            <img src={imageSource} alt={altImage} />
            <div>
                <b>{label}</b>
                <p>
                    {content}
                    <span>{value}</span>
                </p>
            </div>
        </Container>
    );
};

export default WeatherDetails;
