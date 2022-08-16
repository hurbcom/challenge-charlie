import styled from "styled-components";
import breakpoints from "../../breakpoints";
import gpsIcon from "../../icons/gps.svg";

export const Wrapper = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 100vw;
`;

export const IconWrapper = styled.div`
  width: 10.5vh;
  max-width: 10vw;
  aspect-ratio: 1/1;
  background-image: url(${gpsIcon});
  background-size: contain;
  margin-left: 1.375rem;

  @media only screen and (${breakpoints.device.xs}) {
    margin-left: 0.5rem;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  font-size: 3.75rem;
  color: var(--grey);
  padding-left: 1.5rem;
  margin: 0px 0.5rem;
  max-width: 83vw;

  @media only screen and (${breakpoints.device.xs}) {
    font-size: 2rem;
    padding-left: 0rem;
  }
`;
