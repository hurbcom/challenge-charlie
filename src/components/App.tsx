import React from "react";
import Background from "./Background/Background";
import ContentContainer from "./ContentContainer/ContentContainer";

import Locator from "./Locator/Locator";

const App = () => {
  return (
    <>
      <Background />
      <Locator />
      <ContentContainer />
    </>
  );
};

export default App;
