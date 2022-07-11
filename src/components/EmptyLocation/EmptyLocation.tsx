import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "./animation.json";

const EmptyLocation = () => {
  return (
    <div className="bg-gray-200 h-[80vh] w-full rounded-b-xl flex flex-col items-center">
      <div className="w-64 mt-12">
        <Lottie
          loop
          animationData={lottieJson}
          play
          speed={0.8}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
      </div>
      <p className="mx-auto text-gray-100 font-montserrat text-3xl text-center">
        INSIRA UMA LOCALIZAÇÃO
      </p>
    </div>
  );
};

export default EmptyLocation;
