import style from './style.css';
import React from 'react';

import LocationInputContainer from '../../containers/LocationInput';
import DescriptionContainer from '../../containers/Description';
import Tile from '../Tile';

class Weather extends React.Component {
    render() {
        return (
            <div className={style.weatherBlock}>
                <LocationInputContainer />
                <DescriptionContainer />
                <Tile
                    day={this.props.firstTileDay}
                    temperature={this.props.firstTileTemperature}
                    loading={this.props.loading}
                    color={this.props.firstTileColor}
                    changeTemperatureUnit={this.props.changeTemperatureUnit}/>
                <Tile
                    day={this.props.secondTileDay}
                    temperature={this.props.secondTileTemperature}
                    loading={this.props.loading}
                    color={this.props.secondTileColor}
                    changeTemperatureUnit={this.props.changeTemperatureUnit}/>
            </div>
        );
    }
}

export default Weather;
