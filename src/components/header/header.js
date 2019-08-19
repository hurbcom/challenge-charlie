import React from 'react';
import style from './style.less';

const Header = (location, ...props) => {
  console.log(location);

  return (<div>
    <p className={style.header} data-icon="(">{location.location ? location.location : `Não sei seu endereço :(`}</p>
  </div>)
};

export default Header;
