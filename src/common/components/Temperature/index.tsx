import { AfterTomorrow, Today, Tomorrow, Wrapper } from "./style";

export const Temperature = () => {
  return (
    <Wrapper>
      <Today></Today>
      <Tomorrow></Tomorrow>
      <AfterTomorrow></AfterTomorrow>
    </Wrapper>
  );
};
