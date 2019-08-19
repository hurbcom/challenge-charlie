import React from 'react';
import style from './style.less';

const Header = () => {
  console.log(style.header);

  return (<div>
    <p className={style.header} data-icon="(">po</p>
  </div>)
};

export default Header;
