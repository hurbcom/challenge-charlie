import React from "react";
import { Theme, Weather } from './components';

const App = () => {
  return (
    <div className="App">
      <Theme>
        <Weather />
      </Theme>
    </div>
  );
};

export default App;