import React from "react";

interface IconProps {
  color?: string;
}

const Thunderstorm = ({ color }: IconProps) => {
  return (
    <svg className={`fill-${color} w-full h-full`} viewBox="0 0 512 512">
      <path
        fillRule="evenodd"
        d="M400 80c-5.3 0-10.6.4-15.8 1.1a158.6 158.6 0 0 0-256.4 0A112.1 112.1 0 0 0 0 192a112.1 112.1 0 0 0 151.7 104.7 159.2 159.2 0 0 0 75.1 36.5L192 368l32 32-32 96 96-96-32-32 11-33a158.4 158.4 0 0 0 93.3-38.3A112.1 112.1 0 0 0 512 192c0-61.8-50.3-112-112-112Z"
      />
    </svg>
  );
};

export default Thunderstorm;
