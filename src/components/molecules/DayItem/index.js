// Import React Defaults
import React, { Component } from 'react';

// Import Utils
import { degToCompass, days_icons } from '../../../utils/helpers';

// Import Styled
import {
    Day, BoxIcon, IconDay, BoxInfos, Temperature, TemperatureTip, 
    Statistics, Static,
} from './styled';

class DayItem extends Component {
    constructor( props ){
        super( props );

        this.state = {
            showTempInF: false
        }
    }

    // Muda a forma com que a temperatura é exibida ( C to F )
    changeTempType = () => {
        const currentType = this.state.showTempInF;
        this.setState({ showTempInF: !currentType });
    }

    render() {
        const { colors, climate, tempTip } = this.props;
        const currentType = this.state.showTempInF;
        return (
            <Day {...colors}>
                <BoxIcon>
                    <IconDay data-icon={days_icons[climate.temp_icon]} />
                </BoxIcon>
                <BoxInfos>
                    <Temperature onClick={this.changeTempType}>
                        {tempTip}<br />
                        {
                            !currentType ? (
                                `${parseInt(climate.temp)}ºC`
                            ) : (
                                `${parseInt(climate.temp_f)}ºF`
                            )
                        }
                    </Temperature>
                    <TemperatureTip>{climate.temp_tip}</TemperatureTip>
                    <Statistics>
                        <Static>Vento: {degToCompass(climate.wind_deg)} {climate.wind_speed}km/h</Static>
                        <Static>Humidade: {climate.humidity}%</Static>
                        <Static>Pressão: {parseInt(climate.pressure)}hPA</Static>
                    </Statistics>
                </BoxInfos>
            </Day>
        )
    }
};

export default DayItem;
