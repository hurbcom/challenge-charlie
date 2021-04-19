import React from "react";
import Weather from "../src/components/Weather/Weather";
import Background from '../src/components/Background/Background';


function App() {
  return (
    <div className="App">
        <Background />
          
      <Weather />
    </div>
  );
}

export default App;