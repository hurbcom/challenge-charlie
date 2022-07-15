import styled from "styled-components";

export const Icon = styled.span`
  :before {
    font-family: "MeteoconsRegular";
    content: attr(data-icon);
  }
`;
