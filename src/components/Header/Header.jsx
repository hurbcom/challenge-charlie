import SearchIcon from "@mui/icons-material/TravelExplore";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
import { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { toast } from "react-toastify";
import { OpenCageAPI } from "../../services/OpenCageAPI";

export const Header = () => {
  const { city, setCity } = useContext(CustomerContext);
  const { coordinate, setCoordinate } = useContext(CustomerContext);
  const [inputValue, setInputValue] = useState("");
  const HandleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let RegexArray = inputValue.match(/^[a-zA-Zà-úÀ-Ú.\s_-]+$/);
    if (Array.isArray(RegexArray)) {
      setCity(inputValue);
    } else {
      if (inputValue.indexOf(",") !== -1) {
        let coordinateArray = inputValue.split(",");
        setCoordinate(coordinateArray);
      } else if (inputValue.indexOf(" ") !== -1) {
        let cleanCoordinate = inputValue.trim();
        let coordinateArray = cleanCoordinate.split(" ");
        setCoordinate(coordinateArray);
      } else {
        toast.error("Digite uma cidade ou coordenadas válidas");
      }
    }

    OpenCageAPI(coordinate[0], coordinate[1])
      .get()
      .then((response) => {
        console.log("Before", response.data.results[0].components.city);
        setCity(response.data.results[0].components.city);
        console.log("After", city);
      })
      .catch((error) => {
        toast.error("Digite uma cidade ou coordenadas válidas");
      });
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
