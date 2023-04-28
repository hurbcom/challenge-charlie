import styled from "styled-components";
import Text from "@components/Text";
import React, { PropsWithChildren } from "react";
import { DEVICES } from "@constants/index";

export const TabBody = styled.div<{ open: boolean }>`
    width: 100%;
    max-width: 500px;
    /* I dont like to use magic numbers such as '10rem' but in this case we need to set a height because of the transition */
    height: ${({ open }) => (open ? "15rem" : "5rem")};
    overflow: hidden;
    transition: height 500ms;
    color: white;

    ${Text} {
        line-height: 1.75rem;
    }

    @media ${DEVICES["tablet"]} {
        height: ${({ open }) => (open ? "15rem" : "6rem")};
    }

    @media ${DEVICES["laptop"]} {
        height: ${({ open }) => (open ? "17rem" : "6rem")};
    }
`;

interface TabProps {
    open: boolean;
    onClick: () => void;
}

export default ({ open, onClick, children }: PropsWithChildren<TabProps>) => {
    return (
        <TabBody open={open} onClick={onClick}>
            {children}
        </TabBody>
    );
};
