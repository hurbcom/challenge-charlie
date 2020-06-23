import styled from 'styled-components';

interface ContainerProps {
  imageUrl?: string;
}

export const Container = styled.div<ContainerProps>`
  background: url(${(props) => `https://www.bing.com/${props.imageUrl}`})
    no-repeat center;
  background-size: cover;
  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
