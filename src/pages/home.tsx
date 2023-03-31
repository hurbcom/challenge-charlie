import React, { useState } from 'react';

const Home = () => {
  const [textColor, setTextColor] = useState('text-red-500');

  const changeColor = () => {
    textColor === 'text-red-500'
      ? setTextColor('text-blue-500')
      : setTextColor('text-red-500');
  };
  return (
    <h1 className={textColor} onClick={() => changeColor()}>
      Home
    </h1>
  );
};

export default Home;
