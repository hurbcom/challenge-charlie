import { useEffect, useState } from "react";

import useBackgroundImageBing from "./hooks/useBackgroundImageBing";
import useGeolocation, { LocationProps } from "./hooks/useGeolocation";
import useReverseGeocoding from './hooks/useReverseGeocoding';
import useOpenWeather from "./hooks/useOpenWeather";
import useBackgroundColor from "./hooks/useBackgroundColor";

import { OptionsTownProps } from "./utils/getOptionsTown";

import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import SearchTown from "./components/SearchTown";

import * as Styles from './App.styles'

const App = () => {
    const initialLocation = useGeolocation();
    const [location, setLocation] = useState<LocationProps>(initialLocation);

    const town = useReverseGeocoding(location);
    const [inputTown, setInputTown] = useState<string>("");
    const [optionsTown, setOptionsTown] = useState<OptionsTownProps>({loaded: false});
    
    const [unitTemperature, setUnitTemperature] = useState<string>("celsius");
    const prediction = useOpenWeather(location, unitTemperature);
    
    const backgrounImage = useBackgroundImageBing();
    const backgroundColor = useBackgroundColor(town.loaded, unitTemperature, prediction)

    useEffect(() => {
        if(initialLocation.loaded && !location.loaded) {
            setLocation(initialLocation)
        }
    }, [initialLocation])

    useEffect(() => {
        if(town.loaded) {
            setInputTown(`${town.description?.town}, ${town.description?.state}`)
        }
    }, [town])

    return (
        <>
            {backgrounImage.loaded &&
                <Styles.Container imgUrl={backgrounImage.imgUrl || ""}>
                    {prediction.loaded ?
                        <Styles.PredictionCard>
                            <SearchTown
                                setLocation={setLocation}
                                inputTown={inputTown}
                                setInputTown={setInputTown}
                                optionsTown={optionsTown}
                                setOptionsTown={setOptionsTown}
                            />

                            <WeatherCard
                                unitTemperature={unitTemperature}
                                setUnitTemperature={setUnitTemperature}
                                backgroundColor={backgroundColor}
                                prediction={prediction}
                            />
                        </Styles.PredictionCard>
                    :
                        <Loading />
                    }
                </Styles.Container>
            }
        </>
    );
}

export default App;