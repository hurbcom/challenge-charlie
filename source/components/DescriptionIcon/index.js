import style from './style.css';
import React from 'react';

import cloudyIcon from '../../icons/meteocons-icons/SVG/cloudy.svg';
import mostlyCloudyIcon from
    '../../icons/meteocons-icons/SVG/mostly-cloudy.svg';
import rainIcon from '../../icons/meteocons-icons/SVG/rain.svg';
import sunnyIcon from '../../icons/meteocons-icons/SVG/sunny.svg';

class DescriptionIcon extends React.Component {
    getIcon() {
        switch (this.props.icon) {
            case 'cloudy':
                return cloudyIcon;
            case 'mostly-cloudy':
                return mostlyCloudyIcon;
            case 'rain':
                return rainIcon;
            default:
                return sunnyIcon;
        }
    }

    render() {
        return (
            <div
                className={style.descriptionIcon}>
                <img src={this.getIcon()} className={style.icon}/>
            </div>
        );
    }
}

export default DescriptionIcon;
