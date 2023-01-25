import { useState } from "react";

import { CoordsProps } from "@/types";
import LocationInput from "../LocationInput";

import * as S from "./styles";

export default function WeatherForecast() {
    const [locationCoords, setLocationCoords] = useState<CoordsProps>();

    return (
        <S.Wrapper>
            <LocationInput setLocationCoords={setLocationCoords} />
            {locationCoords && (
                <>
                    <p>Latitude: {locationCoords.latitude}</p>
                    <p>Longitude: {locationCoords.longitude}</p>
                </>
            )}
        </S.Wrapper>
    );
}
