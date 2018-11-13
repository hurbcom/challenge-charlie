import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from 'react-autocomplete';
import * as ramda from 'ramda';
import * as suggestionActions from '../../actions/suggestionActions';
import * as wheaterActions from '../../actions/weatherActions';

class LocationInput extends Component {
    constructor(props, context) {
        super(props);

        this.state = {
            suggestion: '',
            value: '',  
            weather: {},
        }
    }

    componentWillReceiveProps(nextProps){
        const location = ramda.path(
            ['location'], nextProps.weather);
        if (location) {
            if(this.state.value === '')
                this.setState({value: location.city + " - " + location.country});
        }
        this.setState({suggestion: nextProps.suggestion});
    }

    render() {
        return (
        <div className="location-input">
            <Autocomplete
                style={{ width: '100%'}}
                getItemValue={(item) => item}
                items={[this.state.suggestion]}
                renderItem={(item, isHighlighted, index) => 
                    <div    
                        className="option"
                        style=
                        {{ 
                            background: isHighlighted ? 'var(--manilla)' : 'var(--white-two)',
                            width: 'auto'
                        }} 
                        key={index}
                    >
                        {item}
                    </div>
                }
                value={this.state.value}
                onChange={(e) => {
                    let { value } = e.target;
                    this.setState({value: value}, () => {
                        this.props.actions.getSuggestion(value);
                    });
                }}
                onSelect={(value) => 
                    this.setState({value: value}, () => {
                        this.props.actions.getWeatherByLocation(value);
                    })
                }
            />
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => 
    ({ suggestion: state.suggestion, weather: state.weather  });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators({ ...suggestionActions, ...wheaterActions}, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(LocationInput);
