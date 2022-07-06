import React from "react";
import { useStore } from "../../../store/store";

const Overmorrow = () => {
  const theme = useStore((state) => state.globaltheme);
  return (
    <div className={`bg-${theme}-300 w-full text-center h-[15vh] rounded-b-xl`}>
      <h1 className="z-20">Depois de amanhã</h1>
    </div>
  );
};

export default Overmorrow;
