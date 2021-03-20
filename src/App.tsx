import { useEffect, useState } from "react";
import { apiFetch } from "./Utils";
import { BING_IMAGE } from "./Utils/urls";

function App() {
  const [styles, setStyles] = useState({
    backgroundPosition: 'center',
    backgroundSize: 'cover'
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
    </div>
  );
}

export default App;
