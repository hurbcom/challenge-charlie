import { useEffect } from "react";
import { apiFetch } from "./Utils";
import { BING_IMAGE_API } from "./Utils/urls";

function App() {

  useEffect(() => {

    apiFetch(BING_IMAGE_API)
      .get()
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })


  }, [])

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
