import React, { Component } from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        address: '',
        city: null,
        suburb: null
       };
    }

    handleChange = address => {
      this.setState({ address });
    };
   
    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
    };

    componentDidMount = async () => {

      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async(position) => {
              
              const apiOpenCage = 'https://api.opencagedata.com/geocode/v1/json?q=';                
              const keyOpenCage = 'c63386b4f77e46de817bdf94f552cddf';
              const locationUrl = apiOpenCage + position.coords.latitude + '%2C' + position.coords.longitude + '&key=' + keyOpenCage;                               
              const response = await fetch(locationUrl);
              const data = await response.json();
              this.setState({ 
                  city: data.results[0].components.city,
                  suburb: data.results[0].components.suburb,
                  
              });
          });
      } 
  }
   
    
   
    render() {
      return (        
        <PlacesAutocomplete
          value={this.state.suburb + ', ' + this.state.city}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Insira uma localização',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Carregando...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer', fontFamily: 'Arial', padding: '15px', }
                    : { backgroundColor: '#ffffff', cursor: 'pointer', fontFamily: 'Arial', padding: '15px', };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    }
  } 
export default LocationSearchInput;