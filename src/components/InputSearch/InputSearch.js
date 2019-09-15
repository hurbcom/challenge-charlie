import React, { Component } from 'react'
import ReactGoogleMapLoader from 'react-google-maps-loader'
import ReactGooglePlacesSuggest from 'react-google-places-suggest'

import { connect } from 'react-redux';
import * as fetchWeather from '../../store/actions/index';

const MY_API_KEY = "AIzaSyD7X3kYu6j_OcdMJVeNGmp6wEnbSqqroQI" // fake

export class InputSearch extends Component {
    state = {
        search: "",
        value: "",
    }
    
    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
        console.log(this.state)

    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        this.setState({search: "", value: geocodedPrediction.formatted_address})
        this.props.onGetPlace(geocodedPrediction.address_components[0].short_name)
        console.log(geocodedPrediction.address_components[0].short_name)

    }
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search)
        console.log(this.state)

    }

    handleStatusUpdate = (status) => {
        console.log(status)
        console.log(this.state)

    }

    render() {
        const {search, value} = this.state
        return (
            <ReactGoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <ReactGooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <input
                                type="text"
                                value={value}
                                placeholder="Rio de Janeiro, Rio de Janeiro"
                                onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                    )
                }
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        cres: state.tim,
        
    }
  };
  const mapDispatchToProps = dispatch => {
    return {
        onGetPlace: (place) => dispatch(fetchWeather.getPlace(place)),
  
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
