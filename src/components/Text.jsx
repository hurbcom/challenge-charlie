import styled from "styled-components";

export default styled.div`
    margin: ${({ m }) => (m ? m : 0)};
    font-size: ${({ size }) => (size ? size : "100%")};
    text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
`;
