import { useEffect, useState } from "react"
import { TownProps } from "./useReverseGeocoding"
import { PredictionProps } from "../hooks/useOpenWeather"

export interface BackgroundColorProps {
    color: {
        current: string
        tomorrow: string
        afterTomorrow: string
    }
}

const useBackgroundColor = (isSelectionTown: boolean, unitTemperature: string, prediction: PredictionProps, ) => {
    const [backgroundColor, setBackgroundColor] = useState<BackgroundColorProps>({
        color: {
            current: "",
            tomorrow: "",
            afterTomorrow: "",
        }
    });
    
    const getColor = (temperature?: number) => {
        if(temperature) {
            if(unitTemperature==="celsius") {
                if(temperature<15) return "low"
                if(temperature>35) return "high"
                if(temperature) return "medium"
            }
            if(unitTemperature==="fahrenheit") {
                if(temperature<59) return "low"
                if(temperature>95) return "high"
                if(temperature) return "medium"
            }
        }
        return ""
    }

    useEffect(() => {
        if(isSelectionTown) {
            setBackgroundColor({
                color: {
                    current: getColor(prediction.weather?.current.temperature),
                    tomorrow: getColor(prediction.weather?.tomorrow.temperature),
                    afterTomorrow: getColor(prediction.weather?.afterTomorrow.temperature)
                }
            })
        } else {
            setBackgroundColor({
                color: {
                    current: "",
                    tomorrow: "",
                    afterTomorrow: "",
                }
            })
        }
    }, [isSelectionTown, prediction])

    return backgroundColor
}

export default useBackgroundColor;
