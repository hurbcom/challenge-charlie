import React from "react";
import { useState } from "react";
import Tab from "@components/Tab";
import { AccordeonBody } from "./styles";

export type ConfigObject = {
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
