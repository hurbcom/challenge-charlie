import style from './style.css';
import React from 'react';

import DescriptionIcon from '../DescriptionIcon';
import DescriptionText from '../DescriptionText';

class Description extends React.Component {
    render() {
        return (
            <div className={style.description}>
                <DescriptionIcon icon="2"/>
                <DescriptionText
                    className={style.descriptionText}
                    day="Hoje"
                    temperature="32ºC"
                    weatherType="Ensolarado"
                    wind="NO 6.4km/h"
                    humidity="78%"
                    pressure="1003hPA"/>
            </div>
        );
    }
}

export default Description;
