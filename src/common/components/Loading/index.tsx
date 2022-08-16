import { Caption, Loader, Wrapper } from "./style";

export const Loading = () => {
  return (
    <Wrapper>
      <Loader />
      <Caption>Carregando...</Caption>
    </Wrapper>
  );
};
