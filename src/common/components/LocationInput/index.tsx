import { ChangeEvent, useCallback, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getWeather } from "../../../services/weatherService";
import { locationState, weatherState } from "../../../store/atoms";
import { useDebounce } from "../../hooks/useDebounce";
import { IconWrapper, Input, Loader, Loading, Wrapper } from "./style";

export const LocationInput = () => {
  const [location, setLocation] = useRecoilState(locationState);
  const setWeather = useSetRecoilState(weatherState);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const loadWeather = useCallback(async (location: string) => {
    setWeather(undefined);
    setWeather(await getWeather(location));
  }, []);

  useDebounce<string>({ value: location, onDebounce: loadWeather });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <Wrapper>
      <IconWrapper />
      <Input value={location} onChange={handleChange} />
      <Loading isLoading={isLoadingLocation}>
        <Loader />
      </Loading>
    </Wrapper>
  );
};
