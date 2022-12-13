import React from "react";

interface Props {
  temperature: number;
}

export default function TempItem(props: Props) {
  const [isCelsius, setIsCelsius] = React.useState(true);

  const handleClick = () => {
    setIsCelsius(!isCelsius);
  };
  const farenheit = (temp: number) => {
    return Math.round((temp * 9) / 5 + 32);
  };
  return (
    <li className="temp" onClick={handleClick}>
      {isCelsius
        ? `${Math.round(props.temperature)}`
        : farenheit(props.temperature)}{" "}
      {isCelsius ? "°C" : "°F"}
    </li>
  );
}
