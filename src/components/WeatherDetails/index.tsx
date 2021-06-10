import React from 'react';

import { Container } from './styles';

interface WeatherDetailsProps {
    label?: string;
    content?: string | number;
    value?: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
    children,
    label,
    content,
    value,
}) => {
    return (
        <Container>
            {children}
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
