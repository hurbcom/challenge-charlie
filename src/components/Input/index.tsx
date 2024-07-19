import { useContext, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { PlaceName } from "../../api/geocode";
import {
  WeatherContext,
  WeatherContextType,
} from "../../contexts/WeatherProvider";
import queryClient from "../../queries/QueryClient";
import Icon from "../Icon";
import { InputContainer, InputField } from "./styles";

const Input = () => {
  const { location, setLocation, coordinates } = useContext(
    WeatherContext
  ) as WeatherContextType;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  };

  const getUserLocation = async () => {
    let query = await queryClient.getQueryData([
      "currentPlaceName",
      coordinates?.latitude,
      coordinates?.longitude,
    ]);

    if (query) {
      let placeName = query as PlaceName;
      let inputValue = `${placeName.city}, ${placeName.state}, ${placeName.country}`;
      setLocation(inputValue);
      if (inputRef.current) {
        inputRef.current.value = inputValue;
      }
    }
  };

  return (
    <InputContainer>
      <Icon
        data-tooltip-id="location-tooltip"
        data-tooltip-content="Clique selecionar a localização atual."
        data-tooltip-place="top"
        //data-tooltip-offset={-160}
        data-tooltip-variant="light"
        color="gray"
        size={32}
        clickable={true}
        onClick={getUserLocation}
      >
        (
      </Icon>
      <InputField
        type="text"
        ref={inputRef}
        defaultValue={location}
        onBlur={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite um local..."
      />
      <Tooltip id="location-tooltip" />
    </InputContainer>
  );
};

export default Input;
