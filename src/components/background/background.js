import React from 'react';


const Background = () => {

  const request = async () => {
    const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
    const json = await response.json();
    console.log(json);
  }
  request();
  return (<div>
    oi
  </div>)
};

export default Background;
