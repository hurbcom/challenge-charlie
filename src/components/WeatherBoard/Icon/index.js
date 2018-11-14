import './style.scss'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as unitActions from '../../../actions/unitsActions';

import sunny from '../../../../assets/icons/2.svg';
import windy from '../../../../assets/icons/6.svg';
import partlyCloudy from '../../../../assets/icons/8.svg';
import cloudy from '../../../../assets/icons/14.svg';
import thunderstorm from '../../../../assets/icons/15.svg';
import rain from '../../../../assets/icons/18.svg';
import snow from '../../../../assets/icons/23.svg';
import na from '../../../../assets/icons/45.svg';

class Icon extends Component {

    constructor(props){
        super(props);
        this.state = { 
            unit: 'C',
        }

        this.handleClick = this.handleClick.bind(this);
        this.getIcon = this.getIcon.bind(this);
    }

    handleClick(){
        if(this.state.unit == 'F'){
            this.props.actions.changeTemperatureUnit('C');
        }
        else{
            this.props.actions.changeTemperatureUnit('F');
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({unit: nextProps.unit})
    }

    getIcon(){
        let possibleIcons = [
            {   icon: sunny, weatherTypes: [31, 32, 33] },
            {   icon: windy, weatherTypes: [24] },
            {   icon: partlyCloudy, weatherTypes: [29, 30, 44] },
            {   icon: cloudy, weatherTypes: [26, 27, 28] },
            {   icon: thunderstorm  , weatherTypes: [0, 1, 2, 3, 4, 37, 38, 39, 45] },
            {   icon: rain, weatherTypes: [6, 10, 11, 12, 35] },
            {   icon: snow, weatherTypes: [5, 7, 8, 9, 13, 14, 15, 16, 41, 42, 43, 46] },
        ];

        let { code } = this.props;
        let weatherType = parseInt(code);
        const icon = possibleIcons
            .reduce((prev, curr) => {
                if (curr.weatherTypes.indexOf(weatherType) !== -1) {
                    return curr.icon;
                }
                return prev;
        }, undefined);

        return icon || na;
    }

    render() {
        return(
            <div className="icon">
                <img className="icon__img"  src={this.getIcon()}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(unitActions, dispatch) });

export default connect(null , mapDispatchToProps)(Icon);