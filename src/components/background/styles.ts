import styled from 'styled-components';

interface BackgroundProps {
  url?: string;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  background-image: ${(props: BackgroundProps) =>
    props.url ? `url(${props.url})` : '#fffff'};
`;

Container.displayName = 'Background';
