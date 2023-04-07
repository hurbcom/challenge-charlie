import perdizes from "@public/perdizes.jpeg";
import { GlobalStyle } from "./styles/global";
import HeroImage from "@components/HeroImage";
import WeatherAccordeon from "@components/WeatherAccordeon";

export default () => {
    return (
        <>
            <GlobalStyle />
            <HeroImage image={perdizes}>
                <WeatherAccordeon />
            </HeroImage>
        </>
    );
};
