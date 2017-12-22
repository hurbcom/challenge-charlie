import style from './style.css';
import React from 'react';

class Tile extends React.Component {
    getBackbackgroundColor() {
        const temperature = (this.props.temperatureFarenheitValue - 32) * 5/9;
        if (temperature > 35) {
            return this.formatRGB(255, 100, 100);
        }
        if (temperature < 15) {
            return this.formatRGB(100, 100, 255);
        }
        return this.formatRGB(150, 150, 150);
    }

    formatRGB(r, g, b) {
        return `rgb(${r}, ${g}, ${b}`;
    }

    render() {
        if (this.props.loading === 'true') {
            return <div className={style.loadingTile}></div>;
        }
        return (
            <div className={style.tile}
                style={{
                    backgroundColor: this.getBackbackgroundColor(),
                }}>
                <div className={style.tileContent}>
                    <div className={style.day}>
                        {this.props.day}
                    </div>
                    <div
                        className={style.temperature}
                        onClick={this.props.changeTemperatureUnit}>
                        {this.props.temperature}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tile;
