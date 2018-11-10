import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from 'react-autocomplete';
import * as weatherActions from '../../actions/weatherActions';

class LocationInput extends Component {
    constructor(props, context) {
        super(props);

        this.state = {
            location: { city: 'Rio de Janeiro' },
            value: '',  
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({weather: nextProps.weather});
    }

    render() {
        return (
        <div className="location-input">
            <Autocomplete
                style={{ width: '100%'}}
                getItemValue={(item) => item}
                items={[ ... this.state.location.city]}
                renderItem={(item, isHighlighted, index) => 
                    <div    id="option"
                            style=
                            {{ 
                                background: isHighlighted ? 'var(--manilla)' : 'var(--white-two)',
                                width: 'auto'
                            }} 
                    key={index}>
                        {item.label}
                    </div>
                }
                value={this.state.value}
                onChange={(e) => {
                    let { value } = e.target;
                    this.setState({value: value}, () => {
                        this.props.actions.getWeatherByLocation(value);
                    });
                }}
                onSelect={(val) => 
                    this.setState({location: val})
                }
            />
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ location: state.weather.location  });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(weatherActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(LocationInput);
