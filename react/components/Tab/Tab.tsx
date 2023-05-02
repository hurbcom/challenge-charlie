import React, { PropsWithChildren } from "react";
import { TabBody } from "./style";

interface TabProps {
    open: boolean;
    onClick: () => void;
}

export default ({ open, onClick, children }: PropsWithChildren<TabProps>) => {
    return (
        <TabBody data-testid="tab" open={open} onClick={onClick}>
            {children}
        </TabBody>
    );
};
