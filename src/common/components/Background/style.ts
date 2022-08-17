import styled from "styled-components";

interface WrapperProps {
  bgUrl?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  background-image: url(${(props) => props.bgUrl});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
`;
