import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt as Location } from "react-icons/fa";
import P from "prop-types";
import * as S from "./styles";

export const Search = ({ city, onSubmit, error, onSetCoordinates }) => {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault(value);
    if (value) onSubmit(value);
    setValue("");
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Icon onClick={(e) => handleSubmit(e)}>
        <FaSearch size={24} />
      </S.Icon>
      <input
        type="text"
        value={value}
        placeholder={city ? `Cidade atual: ${city}` : "Procure sua cidade"}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      {error && <S.Error>{error}</S.Error>}
      <S.Icon onClick={() => onSetCoordinates()}>
        <Location size={24} />
      </S.Icon>
    </S.Wrapper>
  );
};

Search.propTypes = {
  city: P.string,
  onSubmit: P.func,
  onSetCoordinates: P.func,
  error: P.oneOfType([P.string, P.bool]),
};
