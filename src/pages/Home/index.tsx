import { Background } from "../../common/components/Background";
import { Forecast } from "../../common/components/Forecast";
import { LocationInput } from "../../common/components/LocationInput";
import { Today } from "../../common/components/Today";
import { Container } from "./style";

export const Home = () => {
  return (
    <Background>
      <Container>
        <LocationInput />
        <Today />
        <Forecast />
        <Forecast isPostTomorrow />
      </Container>
    </Background>
  );
};
