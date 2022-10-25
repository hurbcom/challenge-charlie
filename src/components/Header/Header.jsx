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
    OpenWeatherCityApi(inputValue)
      .get()
      .then((response) => {
        setCity(response.data);
      })
      .catch(() => {
        toast.error("Cidade não encontrada");
      });
  };

  return (
    <Container>
      <h1>ClimaWeb</h1>
      <SearchContainer>
        <div>
          <InputText
            onChange={HandleChange}
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
