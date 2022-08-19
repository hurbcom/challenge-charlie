import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import { getWeather } from "../../../services/weatherService";
import { useDebounce } from "../../hooks/useDebounce";
import { IFetchState } from "../../../interfaces/IFetchState";
import { AnimatePresence } from "framer-motion";
import { locationState, weatherState } from "../../../store/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ChangeEvent, useCallback, useState } from "react";
import { ErrorWrapper, IconWrapper, Input, Loader, StateContainer, StateWrapper, Wrapper } from "./style";

export const LocationInput = () => {
  const [location, setLocation] = useRecoilState(locationState);
  const setWeather = useSetRecoilState(weatherState);
  const [fetchState, setFetchState] = useState<IFetchState>("Idle");

  const loadWeather = useCallback(
    async (location: string) => {
      setFetchState("Loading");
      setWeather(undefined);

      try {
        setWeather(await getWeather(location));
        setFetchState("Idle");
      } catch (err) {
        setFetchState("Error");
      }
    },
    [setWeather]
  );

  useDebounce<string>({ value: location, onDebounce: loadWeather });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <Wrapper>
      <IconWrapper />
      <Input value={location} onChange={handleChange} />
      <StateContainer>
        <AnimatePresence>
          {fetchState === "Loading" && (
            <StateWrapper
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Loader />
            </StateWrapper>
          )}

          {fetchState === "Error" && (
            <StateWrapper
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Tooltip placement="left" overlay="Não foi possível carregar o clima para local inserido">
                <ErrorWrapper />
              </Tooltip>
            </StateWrapper>
          )}
        </AnimatePresence>
      </StateContainer>
    </Wrapper>
  );
};
