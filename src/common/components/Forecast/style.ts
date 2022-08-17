import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { IWeatherTypes } from "../../../interfaces/IWeatherTypes";
import breakpoints from "../../breakpoints";

interface ContainerProps {
  temperature?: number;
  isPostTomorrow?: boolean;
}

// interface WrapperProps {
//   isPostTomorrow?: boolean;
// }

// export const Wrapper = styled.div<WrapperProps>`
//   height: 17.5vh;
//   background-color: var(--yellow-300);

//   ${(props) =>
//     props.isPostTomorrow &&
//     css`
//       background-color: var(--yellow-500);
//     `}
// `;

export const Container = styled(motion.section)<ContainerProps>`
  height: 17.5vh;
  background-color: ${(props) => (props.isPostTomorrow ? `var(--yellow-500)` : `var(--yellow-300)`)};
  display: flex;
  justify-content: space-around;

  ${(props) =>
    props.temperature &&
    props.temperature < 15 &&
    css`
      background-color: ${props.isPostTomorrow ? `var(--blue-500)` : `var(--blue-300)`};
    `};

  ${(props) =>
    props.temperature &&
    props.temperature > 35 &&
    css`
      background-color: ${props.isPostTomorrow ? `var(--red-500)` : `var(--red-300)`};
    `};

  @media only screen and (${breakpoints.device.xs}) {
    flex-direction: column;
    height: 55vh;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  color: white;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  &:first-of-type {
    justify-content: flex-end;
  }

  &:nth-of-type(2) {
    justify-content: center;
  }
`;

export const Legend = styled.div`
  font-size: 1rem;
`;

export const Data = styled.div`
  font-size: 1.3rem;
`;

export const BigLegend = styled(Legend)`
  font-size: 2rem;
`;

export const Temperature = styled.div``;
