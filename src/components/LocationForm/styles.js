import styled from "styled-components";
import { media } from "../../styles/media-queries";

export const LocationForm = styled.form`
  display: flex;
  height: 14vh;
  width: 100%;

  ${media.desktop`
    width: 1200px;
  `}

  .field {
    display: flex;
    flex: 1;

    input {
      background: rgba(240, 235, 232, 0.8);
      border: none;
      color: #7f7b7a;
      font-size: 1.2rem;
      padding: 0 20px;
      width: 100%;

      ${media.tablet`
        font-size: 4vh;
      `}

      ${media.desktop`
        font-size: 7vh;
      `}
    }
  }
`;
