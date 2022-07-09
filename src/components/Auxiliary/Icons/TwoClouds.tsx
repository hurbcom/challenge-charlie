import React from "react";

interface IconProps {
  style: string;
}

const TwoClouds = ({ style }: IconProps) => {
  return (
    <svg className={style} viewBox="0 0 512 512">
      <path
        fillRule="evenodd"
        d="M515.2 187a86.2 86.2 0 0 1-28 63.7 112.1 112.1 0 0 1-130 170.8 158.4 158.4 0 0 1-208.7 0A112.1 112.1 0 0 1-3.2 316.8a112.1 112.1 0 0 1 125.5-111.2 86.4 86.4 0 0 1 96.5-104.2 122.4 122.4 0 0 1 197.8 0 86.5 86.5 0 0 1 98.6 85.5Zm-24.7 0a61.7 61.7 0 0 0-85.2-57 98.4 98.4 0 0 0-87.6-54.1 98.5 98.5 0 0 0-87.6 54 61.7 61.7 0 0 0-85 53 158.6 158.6 0 0 1 236 23 111 111 0 0 1 89.3 26.6 61.5 61.5 0 0 0 20.1-45.5Z"
      />
    </svg>
  );
};

export default TwoClouds;
