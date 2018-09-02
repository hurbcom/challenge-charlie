import React from 'react';
import './index.css';

const ImageCondition = props => {
    let formatTextCondition = () => {
        let condition = props.condition;

        return (
            'image-condition ' +
            condition
                .split(' ')
                .join('-')
                .toLowerCase()
        );
    };

    return <div className={props.condition ? formatTextCondition() : null} />;
};

export default ImageCondition;
