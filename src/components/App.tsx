import React from "react";
import { useStore } from "../store/store";
import Background from "./Background/Background";
import ContentContainer from "./ContentContainer/ContentContainer";

import Locator from "./Locator/Locator";

const App = () => {
  const error = useStore((state) => state.isError);
  return (
    <>
      <Background />
      <Locator />
      <ContentContainer />
    </>
  );
};

export default App;
