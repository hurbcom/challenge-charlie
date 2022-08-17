import { BounceLoader } from "react-spinners";
import styled, { css } from "styled-components";
import breakpoints from "../../breakpoints";
import gpsIcon from "../../icons/gps.svg";

interface LoadingProps {
  isLoading: boolean;
}

export const Wrapper = styled.nav`
  height: 15vh;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 100vw;
  padding: 0 1rem;
  gap: 1rem;

  @media only screen and (${breakpoints.device.xs}) {
    height: 10vh;
    gap: 0.5rem;
  }
`;

export const IconWrapper = styled.div`
  width: 10.5vh;
  max-width: 10vw;
  min-width: 20px;
  aspect-ratio: 1/1;
  background-image: url(${gpsIcon});
  background-size: contain;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  font-size: 3.75rem;
  color: var(--grey);
  max-width: 83vw;

  @media only screen and (${breakpoints.device.xs}) {
    font-size: 2rem;
  }
`;

export const Loading = styled.div<LoadingProps>`
  width: 3vw;
  aspect-ratio: 1/1;
  display: none;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isLoading &&
    css`
      display: flex;
    `}
`;

export const Loader = styled(BounceLoader)`
  height: 3vw !important;
  width: 3vw !important;

  span {
    background-color: var(--grey) !important;
    height: 3vw !important;
    width: 3vw !important;
  }
`;
