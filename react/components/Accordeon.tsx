import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Tab from "@components/Tab";

export const AccordeonBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

type ConfigObject = {
    isOpen: boolean;
    index: number;
};

interface Props<T> {
    renderTab: (data: T, config: ConfigObject) => React.ReactNode;
    tabDataArray: T[];
}

const Accordeon = <T extends unknown>({
    renderTab,
    tabDataArray,
}: Props<T>) => {
    const [tabOpen, setTabOpen] = useState(0);

    return (
        <AccordeonBody>
            {tabDataArray.map((data, i) => {
                const isOpen = tabOpen == i;
                return (
                    <Tab
                        key={`accordeon${i}`}
                        open={isOpen}
                        onClick={() => setTabOpen(i)}
                    >
                        {renderTab(data, { isOpen, index: i })}
                    </Tab>
                );
            })}
        </AccordeonBody>
    );
};

export default Accordeon;
