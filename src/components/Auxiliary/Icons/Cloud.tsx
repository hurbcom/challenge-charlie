import React from "react";

interface IconProps {
  style: string;
}

const Cloud = ({ style }: IconProps) => {
  return (
    <svg className={style} viewBox="0 0 512 512">
      <path
        fillRule="evenodd"
        d="M400 160c-5.3 0-10.6.4-15.8 1.1a158.6 158.6 0 0 0-256.4 0A112.1 112.1 0 0 0 0 272a112.1 112.1 0 0 0 151.7 104.7 158.4 158.4 0 0 0 208.6 0A112.1 112.1 0 0 0 512 272c0-61.8-50.3-112-112-112z"
      />
    </svg>
  );
};

export default Cloud;
