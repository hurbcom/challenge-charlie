import React from 'react';

import { Container } from './styles';
interface SecondarySectionWeather {
    title?: string;
    value?: string | number;
    iconSource?: string;
    alt?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const CardVertical: React.FC<SecondarySectionWeather> = ({
    title,
    value,
    iconSource,
    alt,
    onClick,
}) => {
    return (
        <Container>
            <div>
                <span>{title}</span>
            </div>
            <div onClick={onClick}>
                <span>
                    <b>{value}</b>
                </span>
                <img src={iconSource} alt={alt} />
            </div>
        </Container>
    );
};

export default CardVertical;
