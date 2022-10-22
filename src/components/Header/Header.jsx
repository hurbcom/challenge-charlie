import SearchIcon from "@mui/icons-material/TravelExplore";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
import { useState } from "react";
export const Header = () => {
  const [city, setCity] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <Container>
      <h1>ClimaWeb</h1>
      <SearchContainer>
        <div>
          <InputText
            type="text"
            value={city}
            placeholder="Digite aqui sua cidade"
          />
        </div>
        <DivIcon onClick={handleClick}>
          <SearchIcon />
        </DivIcon>
      </SearchContainer>
    </Container>
  );
};
