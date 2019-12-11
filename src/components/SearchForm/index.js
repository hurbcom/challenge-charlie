import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowDown, FaSearch } from 'react-icons/fa';

import { Container } from './styles';

export default function SearchForm() {
  const { isOpened, selectedValue, brazilStates } = useSelector(
    state => state.main
  );

  function handleOpenForm(e) {
    e.preventDefault();
    setIsOpened(!isOpened);
  }
  function handleSelect(e) {
    e.preventDefault();
    setLocation(selectedValue);
  }

  return (
    <Container onSubmit={handleSelect}>
      {isOpened ? (
        <>
          <select
            value={selectedValue}
            onChange={e => setSelectedValue(e.target.value)}
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
        <button type="button" onClick={handleOpenForm}>
          <FaArrowDown size={20} />
        </button>
      )}
    </Container>
  );
}
