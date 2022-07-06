import React from "react";

interface IconProps {
  color?: string;
}

const Rain = ({ color }: IconProps) => {
  return (
    <svg className={`fill-${color} w-full h-full`} viewBox="0 0 512 512">
      <path
        fill-rule="evenodd"
        d="M400 64c-5.3 0-10.6.4-15.8 1.1a158.6 158.6 0 0 0-256.4 0A112.1 112.1 0 0 0 0 176a112.1 112.1 0 0 0 151.7 104.7 158.4 158.4 0 0 0 208.6 0A112.1 112.1 0 0 0 512 176c0-61.8-50.3-112-112-112zM225 480a32 32 0 1 0 64 0c0-17.7-32-64-32-64s-32 46.3-32 64zm127-32a32 32 0 1 0 64 0c0-17.7-32-64-32-64s-32 46.3-32 64zM96 384a32 32 0 1 0 64 0c0-17.7-32-64-32-64s-32 46.3-32 64z"
      />
    </svg>
  );
};

export default Rain;
