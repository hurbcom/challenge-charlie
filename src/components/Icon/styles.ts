import styled from "styled-components";

const IconContainer = styled.span<{
  $size?: number;
  $color?: string;
  $clickable?: boolean;
}>`
  display: flex;
  flex-direction: row;
  font-family: "MeteoconsRegular";
  font-size: ${(props) => (props.$size ? `${props.$size}px` : "16px")};
  color: ${(props) => (props.$color ? props.$color : "#000")};
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
  opacity: 100;
`;

export { IconContainer };
