import React from "react";

import { useStore } from "../../../store/store";

const WeatherToday = () => {
  const forecast = useStore((state) => state.forecast);
  return (
    <p
      className="
  bg-red-400 w-full text-center h-[40vh] before:content-[''] "
    >
      Teste
    </p>
  );
};

export default WeatherToday;
