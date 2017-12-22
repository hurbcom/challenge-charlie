import style from './style.css';
import React from 'react';
import svg6 from '../../icons/meteocons-icons/SVG/6.svg';

class DescriptionIcon extends React.Component {
    render() {
        return (
            <div
                className={style.descriptionIcon}>
                <img src={svg6} className={style.icon}/>
            </div>
        );
    }
}

export default DescriptionIcon;
