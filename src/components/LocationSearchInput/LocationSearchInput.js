import React from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import { GoogleApiWrapper } from "google-maps-react";

const LocationSearchInput = ({ getWeather, initialCity }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (description) => {
    setValue(description, false);

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        return getWeather({ lat, lng });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value || initialCity} onChange={handleInput} disabled={!ready} selectOnClick />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAFAYR-TjBN5hnaWCz2YSWzcqRojIO6fdU",
  libraries: ["places"]
})(LocationSearchInput);
