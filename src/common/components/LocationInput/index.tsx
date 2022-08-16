import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../../../store/atoms";
import { useDebounce } from "../../hooks/useDebounce";
import { IconWrapper, Input, Wrapper } from "./style";

export const LocationInput = () => {
  const [location, setLocation] = useRecoilState(locationState);

  const loadWeather = (loc: string) => {
    console.log(loc);
  };

  useDebounce<string>({ value: location, onDebounce: loadWeather });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <Wrapper>
      <IconWrapper />
      <Input value={location} onChange={handleChange} />
    </Wrapper>
  );
};
