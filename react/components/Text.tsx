import styled from "styled-components";

export default styled.div<{ m: string; size: string; capitalize: boolean }>`
    margin: ${({ m }: { m?: string }) => (m ? m : 0)};
    font-size: ${({ size }: { size?: string }) => (size ? size : "100%")};
    text-transform: ${({ capitalize }: { capitalize: boolean }) =>
        capitalize ? "capitalize" : "none"};
`;
