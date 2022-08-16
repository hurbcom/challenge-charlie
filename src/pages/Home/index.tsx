import { Background } from "../../common/components/Background";
import { LocationInput } from "../../common/components/LocationInput";
import { Temperature } from "../../common/components/Temperature";
import { Container } from "./style";

export const Home = () => {
  return (
    <Background>
      <Container>
        <LocationInput />
        <Temperature />
      </Container>
    </Background>
  );
};
