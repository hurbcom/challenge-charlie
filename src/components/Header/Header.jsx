import SearchIcon from "@mui/icons-material/TravelExplore";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";

//^[a-zA-Zà-úÀ-Ú.\s_-]+$  regex de letras
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
    // const re = /^[a-zA-Zà-úÀ-Ú.\s_-]+$/;
    // let RegexArray = inputValue.match(re);
    // console.log(RegexArray); // se retorna um array com tamanho 0 mas se for null é numero
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
