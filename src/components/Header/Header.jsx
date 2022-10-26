import SearchIcon from "@mui/icons-material/TravelExplore";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
import { CustomerContext } from "@providers/CustomerContext";
import { isCity, validCoordinates } from "@functions/LocationValidation";

export const Header = () => {
  const { setCity } = useContext(CustomerContext);
  const { setCoordinate } = useContext(CustomerContext);
  const [inputValue, setInputValue] = useState("");
  const HandleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isCity(inputValue)) {
      setCity(inputValue);
      setCoordinate([]);
    } else {
      const coordinates = validCoordinates(inputValue);
      if (!coordinates) {
        toast.error("Digite uma cidade ou coordenadas válidas");
      } else {
        setCoordinate(coordinates);
        setCity("");
      }
    }
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
