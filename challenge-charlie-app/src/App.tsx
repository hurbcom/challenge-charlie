import './App.scss';
import DesktopLayout from './layout/DesktopLayout';
import BingDisplayComponent from './component/bing/BingDisplayComponent';
import WeatherInfoComponent from './component/weather/WeatherInfoComponent';
import { BingApi } from './component/bing/BingApi';

function App() {
  
  _setBodyBackground();

  const isPortable = window.me

  const _mkt = 'pt-BR';
  const _display = <BingDisplayComponent mkt={_mkt}></BingDisplayComponent>;
  const _info = <WeatherInfoComponent></WeatherInfoComponent>
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <DesktopLayout displayComponent={_display} infoComponent={_info} />
  );
}
export default App;

async function _setBodyBackground()
{
  BingApi.getImageArchive()
    .then(data => {
      document.body.style.background =  'rgba(0, 0, 0, 0.5)';
      document.body.style.backgroundImage = `url('${data.images[0].url}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundBlendMode = 'darken';
  });
}
