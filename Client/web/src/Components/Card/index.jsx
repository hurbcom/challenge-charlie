import { Input } from "../Input";
import {
    CardWrapper,
    WeaterContainer,
    WeaterContent,
    Icon,
    Informations,
    Details,
    After,
} from "./style";
import { TiWeatherSunny } from "react-icons/ti";
import colors from "../../Styles/colors";

export const CardWeather = ({ nameLocale, handleChange, handleOnBlur }) => (
    <CardWrapper>
        <Input placeholder="Search city" value={nameLocale} />
        <WeaterContainer>
            <WeaterContent>
                <Icon>
                    <TiWeatherSunny size={150} color={colors.white} />
                </Icon>

                <Informations>
                    <Details>
                        Hoje 32ºC
                        <br />
                        Ensolarado
                        <br />
                        Vento: NO 6.4km/h Humidade: 78% Pressão: 1003hPA
                    </Details>

                    <After>
                        AMANHÃ 32ºC
                        <br />
                        DEPOIS DE AMANHÃ 22ºC
                    </After>
                </Informations>
            </WeaterContent>
        </WeaterContainer>
    </CardWrapper>
);
