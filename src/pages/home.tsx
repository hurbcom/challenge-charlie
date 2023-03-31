import React, { useState, useEffect } from 'react';

const Home = () => {
  const [textColor, setTextColor] = useState('text-red-500');

  useEffect(() => {
    fetch('/api/health').then(async (res) => {
      console.log(await res.json());
    });
  }, []);

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
