import React from 'react';
import styled from "styled-components";

type Props = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    size: string; //pixels
    responsiveSize: string;
}
type StyledProps = {
    size: string;
    responsiveSize: string;
}

export const IconRender = ({
    icon,
    size,
    responsiveSize,
}: Props) => {
    const Icon = styled(icon)<StyledProps>`
        width: ${props => props.size};
        height: ${props => props.size};
        

        @media (min-width: 470px) {
            width: ${props => props.responsiveSize};
            height: ${props => props.responsiveSize};
        }
    `
    
    return (
        <Icon
            size={size}
            responsiveSize={responsiveSize}
        />
    )
}