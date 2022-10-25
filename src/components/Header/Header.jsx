import SearchIcon from "@mui/icons-material/TravelExplore";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
import { useContext, useState } from "react";
import { OpenWeatherCityApi } from "../../services/OpenWeatherAPI";
import { CustomerContext } from "../../providers/CustomerContext";
import { toast } from "react-toastify";
export const Header = () => {
  const { setCity } = useContext(CustomerContext);
  const [inputValue, setInputValue] = useState("");
  const HandleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setCity(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  return (
    <Container>
      <h1>ClimaWeb</h1>
      <SearchContainer>
        <div>
          <InputText
            onChange={HandleChange}
            onKeyDown={handleKeyDown}
            type="text"
            value={inputValue}
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
