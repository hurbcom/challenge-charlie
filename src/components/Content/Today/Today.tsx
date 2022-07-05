import React from "react";

import { useStore } from "../../../store/store";

const Today = () => {
  const forecast = useStore((state) => state.forecast);
  return (
    <div
      className="
  bg-red-100 w-full text-center h-[40vh] before:content-[''] before:bg-red-100
  before:block before:rounded-[100%] before:h-4 before:w-full before:-translate-y-[50%]"
    >
      <h1 className="z-20">Hoje</h1>
    </div>
  );
};

export default Today;
