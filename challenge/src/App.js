import React from 'react';

import Search from './Search/Search';
import Content from './Content/Content';


export default function App (){

  const BackgroundImage = {
    backgroundImage: `url(https://bing.com/th?id=OHR.PurnululuNP_PT-BR3234973741_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)`
  }

  return (
    <div className="container" style={BackgroundImage}>
      <div className="main__container">
          <Search />
          <Content />
      </div>
    </div>
  )
}
