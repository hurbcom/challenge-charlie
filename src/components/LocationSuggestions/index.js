import React from 'react';
import {
  StyledCombobox,
  Input,
  ListWrapper,
  OptionList,
  Option,
} from './styles';

import '@reach/combobox/styles.css';
import { handleSelect } from './utils/handleSelect';
import usePlacesAutoComplete from 'use-places-autocomplete';
import { useWeatherContext } from '../../contexts/AppDataContext';

export const LocationSuggestions = () => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete();

  const { setCoordinates } = useWeatherContext();

  const getCoord = address =>
    handleSelect(address, setValue, clearSuggestions, setCoordinates);

  return (
    <StyledCombobox onSelect={getCoord}>
      <Input
        placeholder="digite uma localização..."
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={!ready}
      />
      <ListWrapper>
        <OptionList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <Option key={place_id} value={description} />
            ))}
        </OptionList>
      </ListWrapper>
    </StyledCombobox>
  );
};
