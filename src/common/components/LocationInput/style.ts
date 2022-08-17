import styled from "styled-components";
import gpsIcon from "../../icons/gps.svg";
import alertIcon from "../../icons/alert.svg";
import { motion } from "framer-motion";
import breakpoints from "../../breakpoints";
import { BounceLoader } from "react-spinners";

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
  max-width: calc(100vw - 28px - 1rem - 40px);

  @media only screen and (${breakpoints.device.xs}) {
    font-size: 2rem;
  }
`;

export const StateContainer = styled.div`
  width: 3vw;
  min-width: 20px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Loader = styled(BounceLoader)`
  height: 3vw !important;
  width: 3vw !important;
  min-width: 20px;
  min-height: 20px;

  span {
    background-color: var(--grey) !important;
    height: 3vw !important;
    width: 3vw !important;
    min-width: 20px;
    min-height: 20px;
  }
`;

export const ErrorWrapper = styled.div`
  height: 3vw;
  width: 3vw;
  min-width: 20px;
  min-height: 20px;
  background-image: url(${alertIcon});
  background-size: contain;
  background-position: center;
`;

export const StateWrapper = styled(motion.div)`
  position: absolute;
  inset: 0 0 0 0;
`;
