import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "./animation.json";

const Loading = () => {
  return (
    <div className="h-[100vh] md:h-[55vh] lg:h-[95vh] bg-gray-200 md:mx-[30%] md:my-[17.5vh] lg:my-[2.5vh] rounded-xl drop-shadow-md  flex flex-col  items-center">
      <div className="my-auto">
        <Lottie
          loop
          animationData={lottieJson}
          play
          speed={0.8}
          style={{ width: 250, height: 250 }}
        />
        <h1 className="text-center text-[8vw] font-medium md:text-3xl text-gray-100 font-sans">
          CARREGANDO
        </h1>
      </div>
    </div>
  );
};
export default Loading;
