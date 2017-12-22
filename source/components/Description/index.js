import style from './style.css';
import React from 'react';

import DescriptionIcon from '../DescriptionIcon';
import DescriptionText from '../DescriptionText';

class Description extends React.Component {
    getBackbackgroundColor() {
        const temperature = (this.props.temperatureFarenheitValue - 32) * 5/9;
        if (temperature > 35) {
            return this.formatRGBA(255, 100, 100);
        }
        if (temperature < 15) {
            return this.formatRGBA(100, 100, 255);
        }
        return this.formatRGBA(150, 150, 150);
    }

    formatRGBA(r, g, b, a = 0.7) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    render() {
        if (this.props.loading === 'true') {
            return <div className={style.descriptionLoading}></div>;
        }
        return (
            <div
                className={style.description}
                style={{
                    backgroundColor: this.getBackbackgroundColor(),
                }}>
                <DescriptionIcon
                    icon={this.props.icon}/>
                <DescriptionText
                    className={style.descriptionText}
                    day={this.props.day}
                    temperature={this.props.temperature}
                    changeTemperatureUnit={this.props.changeTemperatureUnit}
                    weatherType={this.props.weatherType}
                    wind={this.props.wind}
                    humidity={this.props.humidity}
                    pressure={this.props.pressure}/>
            </div>
        );
    }
}

export default Description;
