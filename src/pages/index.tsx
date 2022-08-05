import type { NextPage } from "next";
import { useEffect } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import * as React from "react";
import { useWheather } from "../service/getWheather";
import Home from "../components/templates/Home";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { debounce } from "../utils/debounce";
import { defaultValueCurrent } from "../Json/currentClimate";
import { variantColor } from "../utils/variantColor";
import { defaultValueForecast } from "../Json/foreCastClimate";
import i18n from "../translate/i18n";
import { useTranslation } from "react-i18next";
import { updateData } from "../service/updateData";
import { changeUnitMeasurement } from "../utils/changeUnitMeasurement";
import { getLocalByCoordinate } from "../utils/getLocalByCoordinate";
import { GetCurrentCityState } from "../service/getCityStateByCoordinates";

const Principal: NextPage = () => {
  const {t} = useTranslation()  
  const [response, setResponse] = React.useState<string>('Brasil');
  const [isLoading,setIsLoading] = React.useState(false) 
  const [currentClimate, setCurrentClimate] = React.useState<ICurrentClimate>(defaultValueCurrent);
  const [foreCastClimate, setForeCastClimate] = React.useState<IForecastClimate>(defaultValueForecast);
  const [language, setLanguage] = useLocalStorage("language", "pt_br");
  const [unit, setUnit] = useLocalStorage("unit", "metric");
  const [unitMeasurement, setUnitMeasurement] = React.useState<IUnitMensure>({
    temperature: "C",
    speed: "Km/h",
  });
  const local = useGeoLocation(); 
  const climate = useWheather();
  const getCurrentyCity = GetCurrentCityState();

  const unitTemp = unitMeasurement.temperature
  const unitSpeed = unitMeasurement.speed

  useEffect(() => {    
    if (unit === "metric") {
      setUnitMeasurement({
        temperature: "C",
        speed: "Km/h",
      });
    } else if (unit === "imperial") {
      setUnitMeasurement({
        temperature: "F",
        speed: "Mph",
      });
    }
    if (language === '"pt_br"') {
      setLanguage('pt_br')      
    } else if (language === "en") {
      setLanguage('en')      
    }    
  }, []);

  useEffect(() => {
    updateData(
      setIsLoading,
      response,
      climate,
      unit,
      language,
      unitSpeed,
      unitTemp,
      setCurrentClimate,
      setForeCastClimate,
      t("humidade"),
      t("pressão"),
      t("vento")
    );    
  }, [response, unit, language]);

  useEffect(() => {
    getLocalByCoordinate(getCurrentyCity,setIsLoading, local, setResponse)  
  }, [local.loaded]);


  const getColorVariant = React.useCallback(
    (temperature: number, unit: string) => {
      return variantColor(temperature, unit);
    },
    [currentClimate.temperatureNumber, unit]
  );

  const variantMemo = React.useMemo(() => getColorVariant(
    Math.round(currentClimate.temperatureNumber),
    unit
  ), [currentClimate.temperatureNumber, unit]);

  const responseMemo = React.useMemo(() => response, [response]);
  const foreCastClimateMemo = React.useMemo(() => foreCastClimate, [foreCastClimate]);
  const currentClimateMemo = React.useMemo(() => currentClimate, [currentClimate]);

  const handleChange = React.useCallback((event:React.ChangeEvent<HTMLInputElement>) => {    
    setResponse(event.target.value)
  },[response])

  const handleChangeUnitMeasurement = React.useCallback(() => {    
    changeUnitMeasurement(unit,setUnit,setUnitMeasurement)
  },[unit])

  const handleChangeLanguage = React.useCallback(() => {   
    if (language === 'pt_br'){
      i18n.changeLanguage('en')
      setLanguage('en')
    } else if (language === 'en'){
      i18n.changeLanguage('pt')
      setLanguage('pt_br')
    }   
  },[language])

  const textTranslate = {
    today: t("Hoje"),
    tomorrow: t("Amanhã"),
    afterTomorrow: t("Depois de amanhã"),
  }

  return (    
      <Home
        variant={variantMemo}
        value={responseMemo}
        onClick={handleChangeUnitMeasurement}
        text={textTranslate}
        dataCurrent={currentClimateMemo}
        dataForecast={foreCastClimateMemo}
        onChange={debounce(handleChange, 1000)}
        onChangeLanguage={handleChangeLanguage} 
        isLoading={isLoading}
      />
  );
};

export default Principal;
