import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import { StyledInput, StyledSuggestions } from "./PlacesAutoCompleteStyles.js";

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: "" };
    }

    handleChange = (address) => {
        this.setState({ address });
    };

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => console.log("Success", latLng))
            .catch((error) => console.error("Error", error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                }) => (
                    <div>
                        <StyledInput
                            {...getInputProps({
                                placeholder: "Pesquisar localizações ...",
                                className: "location-search-input",
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Carregando...</div>}
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                return (
                                    <StyledSuggestions
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                        })}
                                        key={suggestion.placeId}
                                    >
                                        <span>{suggestion.description}</span>
                                    </StyledSuggestions>
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
