import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "./animation.json";

const ErrorScreen = () => {
  return (
    <div className="flex flex-col mx-[30%] bg-gray-200 items-center h-[90vh] my-[5vh] rounded-xl drop-shadow-md">
      <div className="my-auto">
        <Lottie
          loop
          animationData={lottieJson}
          play
          speed={0.8}
          style={{ width: 250, height: 250 }}
        />
        <h1 className="text-center text-3xl text-gray-100 font-sans">ERRO</h1>
      </div>
    </div>
  );
};
export default ErrorScreen;
