import React, { useState } from "react";
import { FaCompass as Compass } from "react-icons/fa";
import P from "prop-types";
import * as S from "./styles";

export const Search = ({ city, onSubmit, error }) => {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault(value);
    onSubmit(value);
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Icon>
        <Compass size={24} />
      </S.Icon>
      <input
        type="text"
        value={value}
        placeholder={city ? city : "Procure sua cidade"}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

Search.propTypes = {
  city: P.string,
  onSubmit: P.func,
  error: P.string,
};
