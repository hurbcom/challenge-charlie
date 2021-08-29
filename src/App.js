import React, { useEffect, useState } from 'react';
import SearchWeatherForecast from './components/search-weather-forecast/SearchWeatherForecast';
import './App.css';

function App() {


  //UseState is used so that state variables are preserved.
  const [background, setBackground] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Call Bing API to obtain the image background
   * Once the useEffect is done, React remembers that the 
   * state of counter has changed during its execution, thus
   * it will re-render the App
   */
  useEffect(() => {
    /**
     * It works to Host the proxy server that help to avoid the dreaded CORS error
     * when trying to get data from web APIs.
     * For that, we used the CORS-Anywhere proxy that was developed 
     * by Rob Wu. It is a Node reverese proxy that adds CORS headers
     * to API resquests. 
     */
    const enableCORS = 'https://desolate-inlet-68192.herokuapp.com/';
    const fetchBackground = async () => {
      fetch(`${enableCORS}https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
        .then(res => {
          if (res.status === 200)
            return res.json();
          else
            throw new Error("Unable to fetch data");
        })
        .then(data => {
          //sets a new state for the background variable.
          setBackground(data.images[0].url);
          setIsLoading(false);
        })
        .catch(error => console.log('error', error));
    };
    fetchBackground();
  }, []);

  //It works to show `loading` while background is rendered
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <div className="background" style={{
        backgroundImage: `linear-gradient(to top, transparent, #8c8c8c), url("https://bing.com/${background}")`
      }} data-testid="background" >
        <div>
        </div>
        <div>
          <main>
            <SearchWeatherForecast />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;