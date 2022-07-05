import React from "react";
import Background from "./Background/Background";
import ContentCard from "./Forecast/ContentCard/ContentCard";
import Locator from "./Locator/Locator";

const App = () => {
  return (
    <>
      <Background />
      <Locator />
      <ContentCard />
    </>
  );
};

export default App;
