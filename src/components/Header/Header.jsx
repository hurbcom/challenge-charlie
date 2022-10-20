import SearchIcon from "@mui/icons-material/TravelExplore";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
export const Header = () => {
  return (
    <Container>
      <h1>ClimaWeb</h1>
      <SearchContainer>
        <div>
          <InputText type="text" placeholder="Digite aqui sua cidade" />
        </div>
        <DivIcon>
          <SearchIcon />
        </DivIcon>
      </SearchContainer>
    </Container>
  );
};
