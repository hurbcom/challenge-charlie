import React from 'react';

import { SkeletonPulse } from './styles';

interface SkeletonLoaderProps {
    width?: string;
    height?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    width = '100%',
    height = '50px',
    ...rest
}) => {
    return (
        <>
            <div
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                }}
                {...rest}
            >
                <SkeletonPulse />
            </div>
            <br></br>
        </>
    );
};
