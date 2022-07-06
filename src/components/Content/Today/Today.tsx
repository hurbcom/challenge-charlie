import React from "react";
import { useStore } from "../../../store/store";
import Icon from "../IconRenderer/Icon";

const Today = () => {
  const forecast = useStore((state) => state.forecast);
  const theme = useStore((state) => state.globaltheme);

  return (
    <div className={`bg-${theme}-100 w-full text-center h-[50vh]`}>
      <Icon
        color={`${theme}-200`}
        code={forecast.today.weather.icon}
        size="[3rem]"
      />
    </div>
  );
};

export default Today;
