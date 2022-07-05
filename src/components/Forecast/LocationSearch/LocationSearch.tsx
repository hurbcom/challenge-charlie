import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox } from "@headlessui/react";

const LocationSearch = () => {
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { types: ["(cities)"], language: "pt-BR" },
    debounce: 400,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleChoice = (place: string) => {
    setValue(place, false);
    clearSuggestions();
  };

  return (
    <Combobox value={value} onChange={handleChoice}>
      <Combobox.Input
        onChange={handleInput}
        className="bg-slate-200 rounded-sm my-3 w-80"
      />
      <Combobox.Options>
        {data.map(({ place_id, description }) => (
          <Combobox.Option key={place_id} value={description}>
            {description}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default LocationSearch;
