import React from 'react';

import LoadingBackground from '../utils/LoadingBackground/LoadingBackground';

export default (props) => {
  const [bgImg, setBgImg] = React.useState(null);

  React.useEffect(() => {
    getBingImg();
  }, []);

  const getBingImg = () => {
    return fetch('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
      .then(res => res.json())
      .then(data => {
        setBgImg(`https://www.bing.com${data.images[0].url}`);
      }).catch(err => console.log(err));
  }

  return (
    <>
      {bgImg ?
        <div className="background" style={{ backgroundImage: `url(${bgImg})` }}>
          {props.children}
        </div> :
        <LoadingBackground />
      }
    </>
  );
}
