import React from "react";

interface IconProps {
  color?: string;
}

const Snow = ({ color }: IconProps) => {
  return (
    <svg className={`fill-${color} w-full h-full`} viewBox="0 0 512 512">
      <path
        fillRule="evenodd"
        d="m326 443.7-18-10.4a52.1 52.1 0 0 0 0-19.2l18-10.4a17.6 17.6 0 1 0-17.7-30.6l-18.1 10.5a53.2 53.2 0 0 0-16.5-9.6v-21a17.7 17.7 0 0 0-35.4 0v21a53 53 0 0 0-16.5 9.6L203.7 373a17.7 17.7 0 1 0-17.7 30.6l18 10.3a52.5 52.5 0 0 0 0 19.3l-18 10.4c-8.5 4.9-11.4 15.7-6.5 24.2s15.7 11.3 24.1 6.4l18.2-10.4a53 53 0 0 0 16.5 9.5v21a17.6 17.6 0 0 0 35.4 0v-21a51.7 51.7 0 0 0 16.5-9.6l18.2 10.5a17.7 17.7 0 1 0 17.6-30.6zm-70-2.3a17.7 17.7 0 1 1 17.7-17.7c0 9.7-8 17.7-17.7 17.7zm218.2-45.1L462 393c-.3-3.8-1.2-7.4-3-11l8.9-8.7a10.5 10.5 0 1 0-14.9-14.9l-8.8 8.8a31.7 31.7 0 0 0-11-2.9l-3.1-12a10.6 10.6 0 1 0-20.3 5.4l3.2 11.9a34 34 0 0 0-4.5 3.7c-1.4 1.4-2.6 2.9-3.6 4.4l-12-3.2a10.6 10.6 0 0 0-12.8 7.4 10.6 10.6 0 0 0 7.4 13l12 3.1c.3 3.8 1.3 7.5 3 11l-8.9 8.8a10.5 10.5 0 0 0 14.8 14.9l9-8.9c3.4 1.7 7 2.7 11 3l3 12a10.5 10.5 0 1 0 20.4-5.5l-3.2-11.9c1.5-1 3-2.2 4.5-3.6 1.3-1.4 2.5-3 3.6-4.5l12 3.2a10.5 10.5 0 0 0 5.4-20.3zm-35.9 6.6a10.5 10.5 0 1 1-14.9-14.8 10.5 10.5 0 0 1 15 14.8zM119 342.5l-11.8 3.2a33.1 33.1 0 0 0-8.1-8l3.1-12a10.5 10.5 0 1 0-20.2-5.4l-3.3 12c-3.8.3-7.4 1.3-11 3l-8.7-8.9A10.5 10.5 0 0 0 44 341.3l8.7 8.8a31.3 31.3 0 0 0-2.9 11l-12 3.1c-5.7 1.6-9 7.3-7.5 13 1.5 5.5 7.3 8.8 13 7.3l11.8-3.2a26.8 26.8 0 0 0 8.1 8.1l-3.2 12a10.5 10.5 0 1 0 20.3 5.5l3.2-12c3.8-.4 7.5-1.4 11-3l8.8 8.8a10.5 10.5 0 0 0 14.9-14.9l-8.9-8.8c1.7-3.5 2.7-7.2 3-11l12-3.2a10.5 10.5 0 0 0-5.5-20.3zM88.6 371a10.5 10.5 0 0 1-15-14.9c4.2-4 10.9-4 15 0s4 10.8 0 14.9zM512 176A112.1 112.1 0 0 0 384.2 65.1a158.6 158.6 0 0 0-256.4 0A112.1 112.1 0 0 0 0 176a112.1 112.1 0 0 0 151.7 104.7 158.4 158.4 0 0 0 208.6 0A112.1 112.1 0 0 0 512 176z"
      />
    </svg>
  );
};

export default Snow;
