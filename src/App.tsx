import { useEffect, useState } from "react";
import ForecastCard from "./Components/ForecastCard";
import { apiFetch, getCoordinates } from "./Utils";
import { BING_IMAGE, USER_LOCATION, WEATHER_FORECAST } from "./Utils/urls";

function App() {
  const [styles, setStyles] = useState({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(34,34,34,.9)',
  })

  useEffect(() => {
    apiFetch(BING_IMAGE)
      .get()
      .then(response => response.json())
      .then(url => {
        setStyles(state => ({ ...state, backgroundImage: `url(${url})` }))
      })
  }, [])

  return (
    <div className="App" style={styles}>
      <ForecastCard />
    </div>
  );
}

export default App;
