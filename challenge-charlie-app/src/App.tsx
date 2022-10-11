import './App.scss';
import DesktopLayout from './layout/DesktopLayout';
import BingDisplayComponent from './component/bing/BingDisplayComponent';
import WeatherInfoComponent from './component/weather/WeatherInfoComponent';
import { BingApi } from './component/bing/BingApi';
import React from 'react';
import PortableLayout from './layout/PortableLayout';
import { debounce } from 'lodash';

export interface IAppLayoutProps {
}

export interface IAppLayoutState {
  isPortable?: boolean;
  layout?: React.ReactNode;
}
class App extends React.Component<IAppLayoutProps, IAppLayoutState>
{
  private _display = <BingDisplayComponent mkt={'pt-BR'}></BingDisplayComponent>;
  private _info = <WeatherInfoComponent></WeatherInfoComponent>
  constructor(props: IAppLayoutProps)
  {
    super(props);
    const isPortable = window.matchMedia('(max-width: 600px)').matches;
    this.state = {isPortable};
  }

  componentDidMount(): void
  {
    window.addEventListener('resize', this.debouncedHandleResize(this._display, this._info).bind(this));
    const isPortable = window.matchMedia('(max-width: 600px)').matches;
    
    this.setState({
      isPortable,
      layout: this.state.isPortable ? 
        <PortableLayout infoComponent={this._info} /> :
        <DesktopLayout displayComponent={this._display} infoComponent={this._info} />
    });
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.debouncedHandleResize(this._display, this._info).bind(this));
  }

 debouncedHandleResize(display: React.ReactNode, info: React.ReactNode) {
   return debounce(() => {
        const isPortable = window.matchMedia('(max-width: 600px)').matches;
        this.setState({
          isPortable,
          layout: isPortable ? 
                    <PortableLayout infoComponent={info} /> :
                    <DesktopLayout displayComponent={display} infoComponent={info} />
        })
    }, 1000);  
 } 

    // window.removeEventListener('resize', debouncedHandleResize)

  render(): React.ReactNode {
      this._setBodyBackground();

      return (
        <div>
          {this.state.layout}
        </div>
      );
  }

    async _setBodyBackground()
    {
      BingApi.getImageArchive()
        .then(data => {
          document.body.style.background =  'rgba(0, 0, 0, 0.5)';
          document.body.style.backgroundImage = `url('${data.images[0].url}')`;
          document.body.style.backgroundSize =  'cover';
          document.body.style.backgroundBlendMode = 'darken';
      });
    }
}

export default App;

