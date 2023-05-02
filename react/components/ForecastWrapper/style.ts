import { opacityVariables } from "@styles/mixins";
import { POSITIONS_TO_OPACITIES } from "@constants/index";
import styled from "styled-components";
export const Content = styled.div`
    ${opacityVariables}
    height: 15rem;
    max-width: 500px;
    width: 100%;
    background-color: rgba(100, 100, 100, var(${POSITIONS_TO_OPACITIES[0]}));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
