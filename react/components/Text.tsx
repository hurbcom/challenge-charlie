import { baseFontSize, subTitleFontSize } from "@styles/mixins";
import styled from "styled-components";

interface Props {
    m?: string;
    size?: string;
    capitalize?: boolean;
    strong?: boolean;
}

export default styled.div<Props>`
    margin: ${({ m }) => (m ? m : 0)};
    font-size: ${({ size }) => (size ? size : baseFontSize)};
    text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
    font-weight: ${({ strong }) => (strong ? "600" : "400")};
    line-height: ${subTitleFontSize};
`;
