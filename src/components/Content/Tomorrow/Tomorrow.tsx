import React from "react";
import { useStore } from "../../../store/store";

const Tomorrow = () => {
  const theme = useStore((state) => state.globaltheme);
  return (
    <div className={`bg-${theme}-200 w-full text-center h-[15vh]`}>
      <h1>Amanhã</h1>
    </div>
  );
};

export default Tomorrow;
