import styled from "styled-components";

const Spacer = styled.div<{ width?: string; padding?: string }>`
    width: ${({ width }) => (width ? width : `0`)};
    padding: ${({ padding }) => (padding ? padding : `0`)};
`;

export default Spacer;
