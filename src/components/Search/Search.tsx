import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox } from "@headlessui/react";

const Search = () => {
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
    <div className="bg-white w-full rounded-t-xl h-[10vh] flex justify-center items-center">
      <Combobox value={value} onChange={handleChoice}>
        <Combobox.Input
          onChange={handleInput}
          className="bg-gray-50 rounded-md flex	h-8 w-full translate-y-[-0.25rem] mx-10"
        />
        <Combobox.Options className="absolute z-40 bg-white p-4 rounded-md">
          {data.map(({ place_id, description }) => (
            <Combobox.Option key={place_id} value={description}>
              {description}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Search;
