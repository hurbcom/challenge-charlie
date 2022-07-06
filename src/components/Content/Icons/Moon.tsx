import React from "react";

interface IconProps {
  color?: string;
  size?: string;
}

const Moon = ({ color, size }: IconProps) => {
  return (
    <svg className={`fill-${color} w-${size} h-${size}`} viewBox="0 0 512 512">
      <path
        fillRule="evenodd"
        d="M241.9 270.1a199.2 199.2 0 0 1-46.4-207.7 197.9 197.9 0 0 0-74.6 46.4A199.6 199.6 0 1 0 403.2 391a196.5 196.5 0 0 0 46.4-74.6A199.1 199.1 0 0 1 242 270.1Z"
      />
    </svg>
  );
};

export default Moon;
