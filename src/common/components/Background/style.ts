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
  /* z-index: -1; */
  display: flex;
  justify-content: center;

  /* &::after {
    content: "";
    background-color: #0005;
    position: absolute;
    inset: 0 0 0 0;
    z-index: -1;
  } */
`;
