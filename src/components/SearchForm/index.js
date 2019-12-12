import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowDown, FaSearch } from 'react-icons/fa';
import { updateLocation } from '../../store/main/actions';
import { FormContainer } from './styles';

export default function SearchForm() {
  const dispatch = useDispatch();
  const { brazilStates } = useSelector(state => state.main);

  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Default');

  function handleOpenForm(e) {
    e.preventDefault();
    setIsOpened(!isOpened);
  }
  function handleSelect(e) {
    e.preventDefault();
    dispatch(updateLocation(selectedValue));
  }

  return (
    <FormContainer onSubmit={handleSelect} data-testid="search-form">
      {isOpened ? (
        <>
          <select
            value={selectedValue}
            onChange={e => setSelectedValue(e.target.value)}
            data-testid="select-element"
          >
            <option value="Default" disabled>
              Escolha uma localidade
            </option>
            {brazilStates.map(data => (
              <option key={data.id} value={data.state}>
                {data.state}
              </option>
            ))}
          </select>
          <button type="submit">
            <FaSearch size={30} />
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={handleOpenForm}
          data-testid="open-button"
        >
          <FaArrowDown size={20} />
        </button>
      )}
    </FormContainer>
  );
}
