import { useEffect, useState } from "react";
import { apiFetch } from "./Utils";
import { BING_IMAGE, USER_LOCATION } from "./Utils/urls";

function getBrowsersLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      apiFetch(USER_LOCATION(latitude, longitude))
        .get()
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    })
  }
}

function App() {
  const [styles, setStyles] = useState({
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  })

  useEffect(() => {
    getBrowsersLocation()
    apiFetch(BING_IMAGE)
      .get()
      .then(response => response.json())
      .then(url => {
        setStyles(state => ({ ...state, backgroundImage: `url(${url})` }))
      })
  }, [])

  return (
    <div className="App" style={styles}>
    </div>
  );
}

export default App;
