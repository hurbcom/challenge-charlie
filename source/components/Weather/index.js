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
                    color={this.props.firstTileColor}
                    loading={this.props.loading}
                    changeTemperatureUnit={this.props.changeTemperatureUnit}/>
                <Tile
                    day={this.props.secondTileDay}
                    temperature={this.props.secondTileTemperature}
                    color={this.props.secondTileColor}
                    loading={this.props.loading}
                    changeTemperatureUnit={this.props.changeTemperatureUnit}/>
            </div>
        );
    }
}

export default Weather;
