import { Home } from "./pages/Home";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./common/styles/global";

export const App = () => {
  return (
    <RecoilRoot>
      <Home />
      <GlobalStyle />
    </RecoilRoot>
  );
};
