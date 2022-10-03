import './App.scss';
import DesktopLayout from './layout/DesktopLayout';
import BingDisplayComponent from './component/bing/BingDisplayComponent';
import WeatherInfoComponent from './component/weather/WeatherInfoComponent';
import { BingApi } from './component/bing/BingApi';
import React from 'react';
import PortableLayout from './layout/PortableLayout';

export interface IAppLayoutProps {
}

export interface IAppLayoutState {
  isPortable?: boolean;
}
class App extends React.Component<IAppLayoutProps, IAppLayoutState>
{

  constructor(props: IAppLayoutProps)
  {
    super(props);
    const isPortable = window.matchMedia('(max-width: 600px)').matches;
    this.state = {isPortable};
  }

  componentDidMount(): void
  {
    
  }

  render(): React.ReactNode {

      this._setBodyBackground();
  
      const _mkt = 'pt-BR';
      const _display = <BingDisplayComponent mkt={_mkt}></BingDisplayComponent>;
      const _info = <WeatherInfoComponent></WeatherInfoComponent>
      const _layout = this.state.isPortable ? 
              <PortableLayout infoComponent={_info} /> :
              <DesktopLayout displayComponent={_display} infoComponent={_info} />;
      return (
        <div>
          {_layout}
        </div>
      );
  }

    async _setBodyBackground()
    {
      BingApi.getImageArchive()
        .then(data => {
          document.body.style.background =  'rgba(0, 0, 0, 0.5)';
          document.body.style.backgroundImage = `url('${data.images[0].url}')`;
          document.body.style.backgroundSize = 'cover';
          document.body.style.backgroundBlendMode = 'darken';
      });
    }
}

export default App;

