import { Today } from "../../common/components/Today";
import { Forecast } from "../../common/components/Forecast";
import { Container } from "./style";
import { Background } from "../../common/components/Background";
import { LocationInput } from "../../common/components/LocationInput";

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
